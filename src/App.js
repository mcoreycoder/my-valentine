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

        <img src={logo} className="App-logo" alt="logo" style={{ display : showit() }}/>

        {/* <Confetti width={1500} height={1000} run={isClick} recycle={false}/> */}

        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          confettiSource={{ x: (width/2), y: (height/2), w: 0, h: 0 }}
          // friction={0.99}
          // wind={.01}
          // gravity={0.1}
          initialVelocityX={6}
          initialVelocityY={20}
          colors={["#AFEEEE","#8A2BE2", "#FF0000", "#FFFF00", "#FFE4E1", "#40E0D0", "#48D1CC", "#00CED1", "#007b7d","#FF1493","#FF00FF"]}
          opacity={0.7}
          recycle={!isClick }
          run={isClick}
          tweenDuration={10000}
          // tweenFunction={()=>10}
          onConfettiComplete={() => {
            window.location.reload();
          
          }}

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
            // ctx.beginPath();
            // // ctx.moveTo(75, 40);
            // // ctx.moveTo(40, 75);
            // ctx.bezierCurveTo(75/2, 37/2, 70/2, 25/2, 50/2, 25/2);
            // ctx.bezierCurveTo(20/2, 25/2, 20/2, 62.5/2, 20/2, 62.5/2);
            // ctx.bezierCurveTo(20/2, 80/2, 40/2, 102/2, 75/2, 120/2);
            // ctx.bezierCurveTo(110/2, 102/2, 130/2, 80/2, 130/2, 62.5/2);
            // ctx.bezierCurveTo(130/2, 62.5/2, 130/2, 25/2, 100/2, 25/2);
            // ctx.bezierCurveTo(85/2, 25/2, 75/2, 37/2, 75/2, 40/2);
            // ctx.fill();
            // ctx.closePath();

            ctx.beginPath();
            ctx.bezierCurveTo(32.5/2, 18.5/2, 35/2, 12.5/2, 25/2, 12.5/2);
            ctx.bezierCurveTo(10/2, 12.5/2, 10/2, 31.25/2, 10/2, 31.25/2);
            ctx.bezierCurveTo(10/2, 40/2, 20/2, 51/2, 32.5/2, 60/2);
            ctx.bezierCurveTo(55/2, 51/2, 65/2, 40/2, 65/2, 31.25/2);
            ctx.bezierCurveTo(65/2, 31.25/2, 65/2,12.5/2, 50/2,12.5/2);
            ctx.bezierCurveTo(42.5/2,12.5/2, 32.5/2, 18.5/2, 32.5/2, 20/2);
            ctx.fill();
            ctx.closePath();

            
          }}
        />
      </header>
    </div>
  );
}

export default App;


