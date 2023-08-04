const express = require("express");
const app = express();
const Top3Albums = require("./api/Top3Albums");
const Top1AlbumPlayer = require("./api/Top1AlbumPlayer");
const Top1AlbumVinyl = require("./api/Top1AlbumVinyl");

app.use(express.json({ extended: false }));
app.use("/api/top-3-albums", Top3Albums);
app.use("/api/top-1-album-player", Top1AlbumPlayer);
app.use("/api/top-1-album-vinyl", Top1AlbumVinyl);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
