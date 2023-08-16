const express = require("express");
const app = express();
const Top3Albums = require("./api/Top3Albums");
const Top1AlbumPlayer = require("./api/Top1AlbumPlayer");
const Top1AlbumVinyl = require("./api/Top1AlbumVinyl");

app.use(express.json({ extended: false }));
app.use("/api/three-github", Top3Albums);
app.use("/api/one-player", Top1AlbumPlayer);
app.use("/api/one-vinylplayer", Top1AlbumVinyl);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
