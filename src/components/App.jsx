import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  const [isMousedOvercolor, setMousedOvercolor] = useState(false);
  function MouseOver() {
    setMousedOvercolor(true);
  }

  function MouseOut() {
    setMousedOvercolor(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOvercolor ? "black" : "white" }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
