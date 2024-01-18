const plinthImage = require("../../asset/plinth.js");
function threeVinylPlayer(album) {
  return `
    <svg width="650" height="400" xmlns="http://www.w3.org/2000/svg">
      <style>
        .background-github {
          background-color: #0D1117;
          height: 400px;
          width: 650px;
        }
        .post-it {
          width:220px;
          height:80px;
          position:absolute;
          top: 225px;
          left: 155px;
          transform: rotate(-12deg);
          z-index: 101;
          background:#ffa;
          overflow:hidden;
          margin:30px auto;
          padding:20px;
          border-radius: 0px 4px 1px 30px/45px;
          box-shadow:
            inset 0 -40px 50px rgba(0,0,0,0.2),
            inset 0 4px 10px rgba(0,0,0,0.2),
            0 5px 6px 5px rgba(0,0,0,0.2);
          font-family: Segoe UI, Ubuntu, sans-serif;
          font-style: normal;
          -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
        }
        .post-it:before {
          content:"";
          display:block;
          position:absolute;
          width:20px;
          height:25px;
          background:#ffa;
          box-shadow:
            3px -2px 10px rgba(0,0,0,0.2),
            inset 15px -15px 15px rgba(0,0,0,0.3);
          left:0;
          bottom:0;
          z-index:2;
          transform:skewX(25deg);
        }
        .album {
          color: #000000;
          font-weight: 700;
          font-size: 18px;
          text-align: center;
          line-height: 20px;
          margin: 6px 0 0 0;
        }
        .artist {
          font-weight: 400;
          color: #000000;
          font-size: 15px;
          text-align: center;
          line-height: 18px;
          margin-top: 6px;
        }
        .record-player {
          position: absolute;
          z-index: 10;
          width: 360px;
          height: 300px;
        }
        .plinth {
          z-index: 10;
          background-image: url('${plinthImage}');
          background-blend-mode: soft-light;
          background-color: #724600;
          width: 360px;
          height: 300px;
          border-radius: 30px;
        }
        .knob {
          content:"";
          height: 36px;
          width: 36px;
          border-radius: 50%;
          position: absolute;
          background-color: #000000;
          top: 202px;
          left: 289px;
          z-index: 10;
        }
        .knob:before {
          content:"";
          height: 5px;
          width: 5px;
          border-radius: 50%;
          position: absolute;
          background-color: #868686;
          top: 7px;
          left: 7px;
        }
        .platter {
          position: absolute;
          border-radius: 50%;
          width: 256px;
          height: 256px;
          background-color: #222222;
          z-index:5;
          top:22px;
          left:22px;
        }
        .vinyl {
          position: absolute;
          border-radius:50%;
          width:250px;
          height:250px;
          z-index:6;
          top:25px;
          left:25px;
          overflow: hidden;
        }
        .headshell {
          width: 20px;
          height: 205px;
          position: absolute;
          border-right: 10px solid #353535;
          border-bottom: 10px solid #353535;
          border-bottom-right-radius: 50px;
          z-index:15;
          left: 250px;
          top: 20px;
          transform: rotate(23deg);
          box-shadow: 2px 2px 3px rgba(0,0,0,.4);
        }
        .headshell:before, .headshell:after {
          content:"";
          position: absolute;
        }
        .headshell:before {
          background-color: #000000;
          width:20px;
          height:30px;
          top:-4px;
          left:14px;
          box-shadow: 2px 2px 3px rgba(0,0,0,.4);
        }
        .headshell:after {
          height:0px;
          width:15px;
          background-color: #000000;
          border-top: 30px solid #000000;
          border-right: 1px solid transparent;
          border-left: 1px solid transparent;
          top:196px;
          left:-2px;
          transform: rotate(50deg);
          box-shadow: 4px 4px 10px rgba(0,0,0,.4);
        }
        .text {
          text-align: center;
          position: absolute;
          z-index: 100;
          font-family: Segoe UI, Ubuntu, sans-serif;
          font-style: normal;
          top: 260px;
          left: 200px;
          transform: rotate(-10deg);
          background-color: #FFF576;
          padding: 30px 20px 10px 20px;
          height: 100px;
          display: flex;
          flex-direction: column;
        }
        .cover {
          position: absolute;
          z-index: 16;
          opacity: 0;
          animation: fade-in-up-scale 1.0s forwards;
          border-radius: 50%;
          width: 220px;
          height: 220px
        }
        .album-cover-1 {
          position: absolute;
          width: 200px;
          height: 200px;
          left: 300px;
          top: 30px;
          box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
          transform: translate(25px, 0px) rotate(-10deg);
        }
        .album-cover-2 {
          position: absolute;
          width: 200px;
          height: 200px;
          left: 350px;
          top: 30px;
          box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
          transform: translate(65px, 80px) rotate(7deg);
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
      <foreignObject width="650" height="400">
        <div xmlns="http://www.w3.org/1999/xhtml" class="background-github">
          <!-- Album covers here -->
          <div class="background-github">
            <div class="record-player">
              <div class="headshell"></div>
              <div class="plinth"></div>
              <div class="knob"></div>
              <div class="platter"></div>
              <a href="${album[0][4]}">
                <img class="vinyl rotate" src="${album[0][0]}" />
              </a>
            </div>
          </div>
          <div class="post-it">
            <p class="album">${album[0][1]}</p>
            <p class="artist">
              <span>${album[0][2]}</span>
              <span style="font-size:16px"> • </span>
              <span>${album[0][3]}</span>
            </p>
          </div>
          <a href="${album[2][4]}">
              <img class="album-cover-2" src="${album[2][0]}" />
            </a>
            <a href="${album[1][4]}">
              <img class="album-cover-1" src="${album[1][0]}" />
            </a>
        </div>
      </foreignObject>
    </svg>
  `;
}

module.exports = { threeVinylPlayer };
