function threeGithub(topAlbums) {
  return `
    <svg width="800" height="338" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="800" height="338">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            .container {
              background-color: #0D1117;
              display: flex;
              justify-content: space-between;
              padding: 20px;
              border-radius: 5px;
              border: 1px solid #E4E2E2;
              font-family: Segoe UI, Ubuntu, sans-serif;
              font-style: normal;
            }
            .album-item {
              display: flex;
              flex-direction: column;
            }
            .cover {
              opacity: 0;
              animation: fade-in-up-scale 1.0s forwards;
            }
            .album {
              opacity: 0;
              color: #F9F9F9;
              font-weight: 700;
              font-size: 16px;
              text-align: center;
              margin-top: 10px;
              margin-bottom: 0px;
              animation: fade-in 1.0s forwards;
            }
            .artist {
              opacity: 0;
              font-weight: 400;
              color: #b3b3b3;
              font-size: 13px;
              text-align: center;
              margin-top: 0px;
              margin-bottom: 0px;
              animation: fade-in 1.2s forwards;
            }
            @keyframes fade-in-up-scale {
              0% { 
                opacity: 0;
                transform: scale(0.7);
              }
              100% { 
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes fade-in {
              0% { 
                opacity: 0;
              }
              100% { 
                opacity: 1;
              }
            }
          </style>
          <div class="container">
            ${topAlbums
              .map(
                (album, index) => `
                <div class="album-item">
                  <a href="${album[4]}">
                    <img class="cover" style="width:240px;height:240px;animation-delay: ${
                      index * 0.5 + 0.15
                    }s" src="${album[0]}" />
                  </a>
                  <div class="text">
                    <p class="album" style="animation-delay:${
                      index * 0.5 + 0.15
                    }s" >${album[1]}</p>
                    <p class="artist" style="animation-delay:${
                      index * 0.5 + 0.15
                    }s">
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

module.exports = { threeGithub };
