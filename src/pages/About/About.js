import "../About/About.css";
import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import aboutBanner from "../../assets/images/about-banner.svg";
import Footer from "../../components/Footer/Footer";
import whiteKasa from "../../assets/icons/white-kasa.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import details from "../../data/Details.json";

function About() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={aboutBanner} />
      <div id="ddGroup">
        {details.map((item) => (
          <Dropdown key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
      <Footer src={whiteKasa} copyright={"© 2020 Kasa. All rights reserved"} />
    </React.Fragment>
  );
}

export default About;
