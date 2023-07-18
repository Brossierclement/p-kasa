import "../About/About.css";
import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import aboutBanner from "../../assets/images/about-banner.svg";

function About() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={aboutBanner} />
    </React.Fragment>
  );
}

export default About;
