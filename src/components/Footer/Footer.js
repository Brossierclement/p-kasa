import "../Footer/Footer.css";
import whiteKasa from "../../assets/icons/white-kasa.svg";

function Footer() {
  return (
    <footer id="footer" className="full-width-footer">
      <div id="footerWrapper">
        <img id="footerImg" src={whiteKasa} alt="logo" />
        <p id="footerP">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
