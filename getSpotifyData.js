const { Buffer } = require("buffer");
const fetch = require("node-fetch");
require("dotenv").config();

async function getAuthorizationToken() {
  const clientID = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const refresh_token = process.env.REFRESH_TOKEN;

  const basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");
  const Authorization = `Basic ${basic}`;
  const url = new URL("https://accounts.spotify.com/api/token");
  const body = "grant_type=refresh_token&refresh_token=" + refresh_token;
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      Authorization,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  }).then((r) => r.json());
  return `Bearer ${response.access_token}`;
}

async function getTopTracks() {
  const Authorization = await getAuthorizationToken();
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50",
    {
      headers: {
        Authorization,
      },
    }
  );
  const { status } = response;
  console.log(status);
  if (status === 204) {
    return null;
  } else if (status === 200) {
    const data = await response.json();
    return data.items;
  }
}

async function getTopAlbums() {
  const items = await getTopTracks();
  //map each value to each array
  const albumNames = items.map((item) => item.album.name);
  const artistNames = items.map((item) =>
    (item.artists || []).map(({ name }) => name).join(", ")
  );
  const albumYears = items.map((item) => item.album.release_date.split("-")[0]);
  const albumImages = items.map((item) => item.album.images);
  const albumSpotifyUrls = items.map(
    (item) => item.album.external_urls.spotify
  );
  console.log(albumSpotifyUrls);
  //array contains track count of the album
  const albumTrackCounts = {};
  albumNames.forEach(function (x) {
    albumTrackCounts[x] = (albumTrackCounts[x] || 0) + 1;
  });

  //sort albumTrackCounts by track count
  let albumSorts = [];
  for (let name in albumTrackCounts) {
    albumSorts.push([name, albumTrackCounts[name]]);
  }
  albumSorts.sort(function (a, b) {
    return b[1] - a[1];
  });

  //remove duplicates (tracks from the same album) and match album value from the same index
  const uniqueAlbum = [...new Set(albumNames)];
  const albumInfo = uniqueAlbum.reduce((obj, key) => {
    const index = albumNames.lastIndexOf(key);
    obj[Object.keys(obj).length + 1] = [
      key,
      artistNames[index],
      albumYears[index],
      albumImages[index],
      albumSpotifyUrls[index],
    ];
    return obj;
  }, {});

  //if albumName match the album name from albumInfo, append the other value
  for (let i = 0; i < albumSorts.length; i++) {
    //
    const albumName = albumSorts[i][0];
    for (const key in albumInfo) {
      if (albumInfo.hasOwnProperty(key) && albumInfo[key][0] === albumName) {
        albumSorts[i] = albumInfo[key];
        break;
      }
    }
  }
  const topAlbums = [];

  for (let i = 1; i < 4; i++) {
    let cover = albumSorts[i - 1][3][0]?.url;
    let coverImg = null;
    if (cover) {
      let buff = await (await fetch(cover)).arrayBuffer();
      coverImg = `data:image/jpeg;base64,${Buffer.from(buff).toString(
        "base64"
      )}`;
    }

    let albumName = albumSorts[i - 1][0];
    let albumArtist = albumSorts[i - 1][1];
    let albumYear = albumSorts[i - 1][2];
    let albumSpotifyUrl = albumSorts[i - 1][4];

    topAlbums.push([
      coverImg,
      albumName,
      albumArtist,
      albumYear,
      albumSpotifyUrl,
    ]);
  }

  return topAlbums;
}

module.exports = { getTopAlbums };
