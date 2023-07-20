import React, { useState } from "react";
import "../Carousel/Carousel.css";
import BtnSlider from "./BtnSlider";

function Carousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToNextImage = () => {
    console.log("Next button clicked");
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrevImage = () => {
    console.log("Prev button clicked");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  return (
    <div id="carousel">
      <div id="carouselImg">
        {pictures.map((picture, index) => (
          <img
            className={index === currentImageIndex ? "active" : "inactive"}
            key={index}
            src={picture}
            alt={`Pic-ture ${index + 1}`}
          />
        ))}
      </div>
      <div id="carouselBtn">
        <BtnSlider direction={"prev"} handleClick={goToPrevImage} />
        <BtnSlider direction={"next"} handleClick={goToNextImage} />
      </div>
    </div>
  );
}

export default Carousel;
