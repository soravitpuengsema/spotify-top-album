function Top1Player(album) {
  return `
    <svg width="304" height="352" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="304" height="352">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            .container {
              border-radius: 30px;
              border: 1px solid #E4E2E2;
              overflow: hidden;
              background-color: #0D1117;
              width: 302px;
              height: 350px;
            }
            .background-image {
              background-image: url("${album[0]}");
              background-size: cover;
              background-position: center;
              width: 302px;
              height: 350px;
              filter: blur(15px);
              transform: scale(1.2); 
              opacity: 30%
            }
            .content {
              left: 0; 
              right: 0;
              position: fixed;
              z-index: 9999;
              padding: 30px;
              font-family: Segoe UI, Ubuntu, sans-serif;
              font-style: normal;
              margin: 0 auto;
            }
            .album-item {
              display: flex;
              flex-direction: column;
              text-align: center;
            }
            .cover {
              opacity: 0;
              animation: fade-in-up-scale 1.0s forwards;
              border-radius: 50%;
              width: 220px;
              height: 220px
            }
            .album {
              opacity: 0;
              color: #FFFFFF;
              font-weight: 700;
              font-size: 16px;
              text-align: center;
              margin-top: 23px;
              margin-bottom: 0px;
              animation: fade-in 1.0s forwards;
            }
            .artist {
              opacity: 0;
              font-weight: 400;
              color: #E5E5E5;
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
            .rotate {
              animation: loading 16s linear infinite;
            }
            @keyframes loading {
              0% {
                transform: rotate(0);
                opacity: 1;
              }
              100% {
                transform: rotate(360deg);
                opacity: 1;
              }
            }
          </style>
          <div class="container">
            <div class="content">
              <div class="album-item">
                <a href="${album[4]}">
                  <img class="cover rotate" src="${album[0]}" />
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
            </div>
            <div class="background-image"></div>
          </div>
        </div>
      </foreignObject>
    </svg>
  `;
}

module.exports = { Top1Player };
