import "../Header/Header.css";
import kasaRed from "../../assets/icons/red-kasa.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <img id="headerImg" src={kasaRed} alt="red kasa" />
      <nav id="headerLinks">
        <Link to={"/"}>Accueil</Link>
        <Link to={"/about"}>À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
