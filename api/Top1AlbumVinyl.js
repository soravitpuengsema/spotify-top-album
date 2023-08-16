const express = require("express");
const router = express.Router();
const { getTopAlbums } = require("../getSpotifyData");
const { oneVinylPlayer } = require("./design/oneVinylPlayer");
router.get("/", async (req, res) => {
  try {
    //get top 3 album info
    const topAlbums = await getTopAlbums(1);
    const show = oneVinylPlayer(topAlbums[0]);

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.status(200).send(show);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
