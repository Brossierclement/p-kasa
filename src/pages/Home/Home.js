import React from "react";
import "../Home/Home.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/home-banner.svg";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import housing from "../../data/Housing.json";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={homeBanner} title={"Chez vous, partout et ailleurs"} />
      <div id="cardGroup">
        {housing.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
          />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
