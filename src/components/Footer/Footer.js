import "../Footer/Footer.css";
import whiteKasa from "../../assets/icons/white-kasa.svg";

function Footer() {
  return (
    <footer id="footer">
      <img id="footerImg" src={whiteKasa} alt="logo" />
      <p id="footerP">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
