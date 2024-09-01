const plinthImage = require("../../asset/plinth.js")
function threeVinylStack(album) {
  return `
    <svg width="335" height="400" xmlns="http://www.w3.org/2000/svg">
      <style>
        .background-github {
          background-color: #0D1117;
          height: 400px;
          width: 335px;
        }
				.container {
					background-color: #0D1117;
					display: grid;
					position: absolute;
					bottom: 0px;
					font-family: 'Segoe UI', Ubuntu, sans-serif;
					font-style: normal;
					padding: 5px;
					width: 325px;
					gap: 10px;
				}
				.album-item {
					display: grid;
					grid-template-columns: 1fr auto;
					gap: 10px;
				}
				.album-name {
					color: #F9F9F9;
					font-weight: 600;
					font-size: 13px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.album-artist {
					font-weight: 400;
					color: #cacaca;
					font-size: 12px;
					white-space: nowrap;
				}
        .album-cover-1 {
          position: absolute;
          width: 200px;
          height: 200px;
          left: 0px;
          top: 20px;
          box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
          transform: translate(25px, 0px) rotate(-8deg);
        }
        .album-cover-2 {
          position: absolute;
          width: 200px;
          height: 200px;
          left: 50px;
          top: 30px;
          box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
          transform: translate(65px, 80px) rotate(7deg);
        }
				.album-cover-3 {
					position: absolute;
					width: 200px;
					height: 200px;
					left: -10px;
					top: -110px;
					box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
					transform: translate(105px, 160px) rotate(-1deg);
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
      <foreignObject width="335" height="400">
        <div xmlns="http://www.w3.org/1999/xhtml" class="background-github">
					<div>
						<a href="${album[2][4]}">
							<img class="album-cover-3" src="${album[2][0]}" />
						</a>
						<a href="${album[1][4]}">
								<img class="album-cover-2" src="${album[1][0]}" />
						</a>
						<a href="${album[0][4]}">
							<img class="album-cover-1" src="${album[0][0]}" />
						</a>
					</div>
					<div class="container">
						${album
              .map(
                (album, index) => `
							<div class="album-item">
								<span class="album-name">${album[1]}</span>
								<span class="album-artist">${album[3]} ${album[2]}</span>
							</div>
						`
              )
              .join("")}
					</div>
        </div>
      </foreignObject>
    </svg>
  `
}

module.exports = { threeVinylStack }
