import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [temp, setTemp] = useState(Math.floor(Math.random() * 61 - 20));
  const onChange = () => {
    setTemp(Math.floor(Math.random() * 61 - 20));
  };
  let background;
  if (temp >= -20 && temp < 4) {
    background = "cold";
  } else if (temp >= 4 && temp < 23) {
    background = "neutral";
  } else {
    background = "warm";
  }
  return (
    <div className={background}>
      <Card temp={temp} onChange={onChange} />
    </div>
  );
}

export default App;
