import "../Carousel/Carousel.css";

function Carousel({ pictures }) {
  return (
    <div id="carouselImg">
      {pictures.map((pictures, index) => (
        <img key={index} src={pictures} alt={`Pic ${index + 1}`} />
      ))}
    </div>
  );
}

export default Carousel;
