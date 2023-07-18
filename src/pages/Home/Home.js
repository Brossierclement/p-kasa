import React from "react";
import "../Home/Home.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/home-banner.svg";
import Package from "../../components/Card/Package/Package";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={homeBanner} title={"Chez vous, partout et ailleurs"} />
      <Package />
    </React.Fragment>
  );
}

export default Home;
