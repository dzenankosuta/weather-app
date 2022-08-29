import React, { useState } from "react";
import ButtonChangeTemp from "../Buttons/ButtonChangeTemp";
import "./Card.css";

const Card = () => {
  const [temp, setTemp] = useState(Math.floor(Math.random() * 61 - 20));

  const onChange = () => {
    setTemp(Math.floor(Math.random() * 61 - 20));
  };
  return (
    <div className="card">
      <h1>{temp}°</h1>
      <ButtonChangeTemp changeTemp={onChange} />
    </div>
  );
};

export default Card;
