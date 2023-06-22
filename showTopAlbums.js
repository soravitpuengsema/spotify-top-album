function showTopAlbums(topAlbums) {
  return `
    <svg width="700" height="304" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="700" height="304">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            .container {
              background-color: #121212;
              display: flex;
              justify-content: space-between;
              padding: 24px;
              border-radius: 20px;
              font-family: sans-serif;
            }
            .album-item {
              display: flex;
              flex-direction: column;
            }
            .album {
              color: #F9F9F9;
              font-weight: bold;
              font-size: 16px;
              text-align: center;
              margin-top: 7px;
              margin-bottom: 2px;
            }
            .artist {
              color: #b3b3b3;
              font-size: 14px;
              text-align: center;
              margin-top: 0px;
              margin-bottom: 0px;
            }
          </style>
          <div class="container">
            ${topAlbums
              .map(
                (album) => `
                <div class="album-item">
                  <a href="${album[5]}">
                    <img style="width:200px" src="${album[0]}" />
                  </a>
                  <div class="text">
                    <p class="album">${album[1]}</p>
                    <p class="artist">
                      <span>${album[2]}</span>
                      <span style="fontSize:10px"> • </span>
                      <span>${album[3]}</span>
                    </p>
                  </div>
                </div>
              `
              )
              .join('')}
          </div>
        </div>
      </foreignObject>
    </svg>
  `;
}

module.exports = { showTopAlbums };
