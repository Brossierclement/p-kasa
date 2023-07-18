import "../Banner/Banner.css";

function Banner({ src, title }) {
  return (
    <section id="banner">
      <h1 id="bannerTitle">{title}</h1>
      <img id="bannerImg" src={src} alt="banner" />
    </section>
  );
}

export default Banner;
