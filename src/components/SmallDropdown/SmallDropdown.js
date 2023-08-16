import React, { useState } from "react";
import "../SmallDropdown/SmallDropdown.css";
import arrow from "../../assets/icons/arrow.svg";

function SmallDropdown({ title, text, equipments }) {
  const [toggle, setToggle] = useState(false);
  console.log("smallDropdown")
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
        {/* si equipements existe */}
        {equipments &&
          equipments.map((item, index) => {
            return (
              <li className="equipements" key={index}>
                {item}
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default SmallDropdown;
