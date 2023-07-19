import React from "react";
import "../Home/Home.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/home-banner.svg";
import Footer from "../../components/Footer/Footer";
import whiteKasa from "../../assets/icons/white-kasa.svg";
import Card from "../../components/Card/Card";
import housing from "../../data/Housing.json";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={homeBanner} title={"Chez vous, partout et ailleurs"} />
      <div id="cardGroup">
        {housing.map((item) => (
          <Card key={item.id} cover={item.cover} title={item.title} />
        ))}
      </div>
      <Footer src={whiteKasa} copyright={"© 2020 Kasa. All rights reserved"} />
    </React.Fragment>
  );
}

export default Home;
