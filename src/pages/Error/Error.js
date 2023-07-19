import React from "react";
import "../Error/Error.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/404.png";

function Error() {
  return (
    <div id="error">
      <Header />
      <section id="errorB">
        <img id="errorImg" src={errorImg} alt="error" />
        <p id="errorP">Oups! La page que vous demandez n'existe pas.</p>
        <Link id="errorLink" to={"/"}>
          Retourner sur la page d'accueil
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Error;
