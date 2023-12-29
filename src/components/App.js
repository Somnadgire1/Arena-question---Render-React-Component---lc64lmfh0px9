import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [numValue, setNumValue] = useState("");

  const handleInput = (inputType, value) => {
    if (inputType === "text") {
      setTextValue((prevValue) => prevValue + value);
      console.log(`Input in #text-input is ${textValue}`);
    } else if (inputType === "number") {
      setNumValue((prevValue) => prevValue + value);
      console.log(`Input in #num-input is ${numValue}`);
    }
  };
  return (
    <div id="main">
       <p>I am learning React. My life is getting better.</p>
       <input
        id="text-input"
        type="text"
        onChange={(e) => handleInput("text", e.target.value)}
        value={textValue}
      />
      <input
        id="num-input"
        type="number"
        onChange={(e) => handleInput("number", e.target.value)}
        value={numValue}
      />
    </div>
  )
}


export default App;
