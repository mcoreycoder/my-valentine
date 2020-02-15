import React, { useState } from "react";
import "./App.scss";

import Confetti from "react-confetti";
import PopHeart from "react-animated-heart";

let logo =
  "https://ideas.hallmark.com/wp-content/uploads/2015/02/1-You-are-loved-Valentine-shareable.jpg";

function App() {
  const [isClick, setClick] = useState(false);

  let showit = () => isClick === true ? "" : "none"

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          <b>I</b>{" "}
          <span>
            <svg class="heart1" viewBox="0 0 32 29.6">
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
            <b>You </b>
          </span>
        </div>
        <h2 style={{ "z-index": "1" }}>Emiley Corey</h2>

        <PopHeart isClick={isClick} onClick={() => setClick(!isClick)} />

        <img src={logo} className="App-logo" alt="logo" style={{ display : showit() }}/>

        <Confetti width={1000} height={1000} run={isClick} />
      </header>
    </div>
  );
}

export default App;
