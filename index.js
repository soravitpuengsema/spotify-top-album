const express = require("express")
const app = express()
const Top3Albums = require("./api/Top3Albums")
const Top1AlbumPlayer = require("./api/Top1AlbumPlayer")
const Top1AlbumVinyl = require("./api/Top1AlbumVinyl")
const Top4AlbumVinyl = require("./api/Top4AlbumVinylPlayer")
const Top3AlbumVinylStack = require("./api/Top3AlbumVinylStack")

app.use(express.json({ extended: false }))
app.use("/api/three-github", Top3Albums)
app.use("/api/one-player", Top1AlbumPlayer)
app.use("/api/one-vinylplayer", Top1AlbumVinyl)
app.use("/api/four-vinylplayer", Top4AlbumVinyl)
app.use("/api/three-vinylstack", Top3AlbumVinylStack)

app.use("/", (req, res) => {
  res.send(
    "/api/three-github, /api/one-player, /api/one-vinylplayer, /api/four-vinylplayer, /api/three-vinylstack"
  )
})

const PORT = process.env.PORT || 8085
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
