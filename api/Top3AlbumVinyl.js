const express = require("express");
const router = express.Router();
const { getTopAlbums } = require("../getSpotifyData");
const { threeVinylPlayer } = require("./design/threeVinylPlayer");
router.get("/", async (req, res) => {
  try {
    //get top 3 album info
    const topAlbums = await getTopAlbums(3);
    const show = threeVinylPlayer(topAlbums);

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.status(200).send(show);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
