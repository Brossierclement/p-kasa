import React from "react";
import "../Carousel/BtnSlider.css";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

function BtnSlider({ direction, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="arrow" />
    </button>
  );
}

export default BtnSlider;
