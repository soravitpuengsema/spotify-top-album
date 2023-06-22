function showTopAlbums(topAlbums) {
  return `
    <svg width="800" height="340.13" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="800" height="340.13">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700');

            .container {
              background-color: #0D1117;
              display: flex;
              justify-content: space-between;
              padding: 20px;
              border-radius: 24px;
              border: 1px solid white;
              font-family: 'Montserrat', sans-serif;
            }
            .album-item {
              display: flex;
              flex-direction: column;
            }
            .album {
              color: #F9F9F9;
              font-weight: 600;
              font-size: 16px;
              text-align: center;
              margin-top: 12px;
              margin-bottom: 0px;
            }
            .artist {
              font-weight: 400;
              color: #b3b3b3;
              font-size: 13px;
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
                    <img style="width:240px" src="${album[0]}" />
                  </a>
                  <div class="text">
                    <p class="album">${album[1]}</p>
                    <p class="artist">
                      <span>${album[2]}</span>
                      <span style="font-size:16px"> • </span>
                      <span>${album[3]}</span>
                    </p>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </foreignObject>
    </svg>
  `;
}

module.exports = { showTopAlbums };
