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
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=30",
    {
      headers: {
        Authorization,
      },
    }
  );
  const { status } = response;
  // console.log(status);
  if (status === 204) {
    return null;
  } else if (status === 200) {
    const data = await response.json();
    return data.items;
  }
}

async function getTopAlbums(number) {
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
  //array contains track count of the album
  const albumTrackCounts = {};
  albumSpotifyUrls.forEach(function (x) {
    albumTrackCounts[x] = (albumTrackCounts[x] || 0) + 1;
  });

  // console.log(albumNames);

  //sort albumTrackCounts by track count
  let albumSorts = [];
  for (let name in albumTrackCounts) {
    albumSorts.push([name, albumTrackCounts[name]]);
  }
  albumSorts.sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(albumSorts);

  //remove duplicates (tracks from the same album) and match album value from the same index
  const uniqueAlbum = [...new Set(albumSpotifyUrls)];
  const albumInfo = uniqueAlbum.reduce((obj, key) => {
    const index = albumSpotifyUrls.lastIndexOf(key);
    obj[Object.keys(obj).length + 1] = [
      key,
      albumNames[index],
      artistNames[index],
      albumYears[index],
      albumImages[index],
    ];
    return obj;
  }, {});

  //if albumName match the album name from albumInfo, append the other value
  for (let i = 0; i < albumSorts.length; i++) {
    //
    let albumSpotifyUrl = albumSorts[i][0];
    for (let key in albumInfo) {
      if (
        albumInfo.hasOwnProperty(key) &&
        albumInfo[key][0] === albumSpotifyUrl
      ) {
        albumSorts[i] = albumInfo[key];
        break;
      }
    }
  }

  //get top 3 albums info
  const topAlbums = [];
  console.log("Getting " + number + " albums...");
  for (let i = 0; i < number; i++) {
    let albumSpotifyUrl = albumSorts[i][0];
    let albumName = albumSorts[i][1];
    let albumArtist = albumSorts[i][2];
    let albumYear = albumSorts[i][3];
    let cover = albumSorts[i][4][0]?.url;
    let coverImg = null;
    if (cover) {
      let buff = await (await fetch(cover)).arrayBuffer();
      coverImg = `data:image/jpeg;base64,${Buffer.from(buff).toString(
        "base64"
      )}`;
    }

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
