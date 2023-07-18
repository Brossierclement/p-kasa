import "../Footer/Footer.css";

function Footer({ src, copyright }) {
  return (
    <footer id="footer">
      <img id="footerImg" src={src} alt="logo" />
      <p id="footerP">{copyright}</p>
    </footer>
  );
}

export default Footer;
