import React, { useState } from "react";
import "./App.scss";

import Confetti from "react-confetti";
import PopHeart from "react-animated-heart";

import useWindowSize from "react-use/lib/useWindowSize";

let logo =
  "https://ideas.hallmark.com/wp-content/uploads/2015/02/1-You-are-loved-Valentine-shareable.jpg";

function App() {
  const [isClick, setClick] = useState(false);
  const { width, height } = useWindowSize();

  let showit = () => (isClick === true ? "" : "none");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          <b>I</b>{" "}
          <span>
            <svg className="heart1" viewBox="0 0 32 29.6">
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
            <b>You </b>
          </span>
        </div>
        <h2 style={{ zIndex: "1" }}>Emiley Corey</h2>

        <PopHeart isClick={isClick} onClick={() => setClick(!isClick)} />

        {/* <img src={logo} className="App-logo" alt="logo" style={{ display : showit() }}/> */}

        {/* <Confetti width={1500} height={1000} run={isClick} recycle={false}/> */}

        <Confetti
          width={width}
          height={height}
          numberOfPieces={50}
          confettiSource={{ x: 720, y: 475, w: 20, h: 10 }}
          // friction={0.95}
          // wind={-0.05}
          gravity={0.01}
          // initialVelocityX={4}
          // initialVelocityY={5}
          colors={["#AFEEEE", "#40E0D0", "#48D1CC", "#00CED1", "#007b7d","#FF1493","#FF00FF","#8A2BE2", "#FF0000", "	#FFFF00", "#FFE4E1"]}
          opacity={0.5}
          // recycle={isClick === false ? true : false}
          run={isClick}
          tweenDuration={10000}
          // tweenFunction={1}
          // onConfettiComplete={(confetti) => console.log("confetti is",confetti)}

          // drawShape={ctx => {
          //   ctx.beginPath()
          //   for(let i = 0; i < 22; i++) {
          //     const angle = 0.35 * i
          //     const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
          //     const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
          //     ctx.lineTo(x, y)
          //   }
          //   ctx.stroke()
          //   ctx.closePath()
          // }}

          drawShape={ctx => {
            ctx.beginPath();
            ctx.moveTo(75, 40);

            ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
            ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
            ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
            ctx.fill();
            ctx.closePath();
          }}
        />
      </header>
    </div>
  );
}

export default App;
