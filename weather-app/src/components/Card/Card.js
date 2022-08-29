import React, { useEffect, useState } from "react";
import ButtonChangeTemp from "../Buttons/ButtonChangeTemp";
import "./Card.css";

const Card = ({ temp, onChange }) => {
  const [text, setText] = useState(null);

  useEffect(() => {
    if (temp >= -20 && temp <= -10) {
      setText(
        "Upozorenje! Napolju je veoma hladno. U slucaju potrebe izlaska iz kuce obucite se dobro."
      );
    } else if (temp >= 33 && temp <= 40) {
      setText(
        "Upozorenje! Napolju je veoma toplo. Ne izlazite iz kuce bez velike potrebe."
      );
    } else {
      setText(null);
    }
  }, [temp]);

  return (
    <div>
      <div className="card">
        <h1>{temp}°</h1>
        <ButtonChangeTemp changeTemp={onChange} />
      </div>
      {text && <div className="description">{text}</div>}
    </div>
  );
};

export default Card;
