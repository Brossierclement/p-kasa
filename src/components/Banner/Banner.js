import "../Banner/Banner.css";

function Banner({ src, children }) {
  return (
    <section id="banner">
      {children}
      <img id="bannerImg" src={src} alt="banner" />
    </section>
  );
}

export default Banner;
