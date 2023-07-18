import React from "react";
import "../Home/Home.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/home-banner.svg";
import Package from "../../components/Card/Package/Package";
import Footer from "../../components/Footer/Footer";
import whiteKasa from "../../assets/icons/white-kasa.svg";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={homeBanner} title={"Chez vous, partout et ailleurs"} />
      <Package />
      <Footer src={whiteKasa} copyright={"© 2020 Kasa. All rights reserved"} />
    </React.Fragment>
  );
}

export default Home;
