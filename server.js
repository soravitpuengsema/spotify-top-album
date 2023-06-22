const express = require('express');
const app = express();
const { renderToString } = require('react-dom/server');
const port = process.env.PORT || 3001;
const { getTopAlbums } = require('./getSpotifyData');
const { showTopAlbums } = require('./showTopAlbums')



// // Define a route handler for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });
app.get('/', async (req, res) => {
  try {
    //get top 3 album info
    const topAlbums = await getTopAlbums();
    const show = showTopAlbums(topAlbums);

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.status(200).send(show);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
