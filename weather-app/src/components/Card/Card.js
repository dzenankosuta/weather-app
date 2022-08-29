import React from "react";
import ButtonChangeTemp from "../Buttons/ButtonChangeTemp";
import "./Card.css";

const Card = ({ temp, onChange }) => {
  return (
    <div className="card">
      <h1>{temp}°</h1>
      <ButtonChangeTemp changeTemp={onChange} />
    </div>
  );
};

export default Card;
