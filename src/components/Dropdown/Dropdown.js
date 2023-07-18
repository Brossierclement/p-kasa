import React, { useState } from "react";
import "../Dropdown/Dropdown.css";
import arrow from "../../assets/icons/arrow.svg";

function Dropdown({ title, text }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id="dropdown">
      <button id="dropdownButton" onClick={() => handleToggle()}>
        <span>{title}</span>
        <img src={arrow} alt="arrow" />
      </button>
      {toggle && (
        <div id="dropdownP">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
