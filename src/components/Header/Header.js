import "../Header/Header.css";
import kasaRed from "../../assets/icons/red-kasa.svg";
import { Link } from "react-router-dom";

function Header({active}) {
  return (
    <header id="header">
      <img id="headerImg" src={kasaRed} alt="red kasa" />
      <nav id="headerLinks">
        <Link className={active === "Home" ? "underline" : "noUnderline"} to={"/"}>Accueil</Link>
        <Link className={active === "About" ? "underline" : "noUnderline"} to={"/about"}>À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
