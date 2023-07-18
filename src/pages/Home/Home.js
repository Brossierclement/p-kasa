import React from "react";
import "../Home/Home.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/home-banner.svg";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={homeBanner} title={"Chez vous, partout et ailleurs"} />
    </React.Fragment>
  );
}

export default Home;
