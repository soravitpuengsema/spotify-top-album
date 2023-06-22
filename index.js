const express = require("express");
const app = express();
const Top3Albums = require("./api/Top3Albums");

app.use(express.json({ extended: false }));

app.use("/api/top-3-albums", Top3Albums);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));