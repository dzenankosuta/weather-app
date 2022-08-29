import React from "react";
import "./ButtonChangeTemp.css";

const ButtonChangeTemp = ({ changeTemp }) => {
  return (
    <div>
      <button className="btn" onClick={changeTemp}>
        Change temperature
      </button>
    </div>
  );
};

export default ButtonChangeTemp;
