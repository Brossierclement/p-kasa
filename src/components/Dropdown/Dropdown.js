import React, { useState } from "react";
import "../Dropdown/Dropdown.css";
import arrow from "../../assets/icons/arrow.svg";

function Dropdown({ title, text, equipments }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [isRotated, setRotated] = useState(false);
  const handleClick = () => {
    setRotated(!isRotated);
  };

  return (
    <div id="dropdown">
      <button
        id="dropdownButton"
        onClick={() => {
          handleToggle();
          handleClick();
        }}
      >
        <span>{title}</span>
        <img
          className={`icon ${isRotated ? "rotated" : ""}`}
          src={arrow}
          alt="arrow"
        />
      </button>
      <div className={`text ${toggle ? "visible" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Dropdown;
