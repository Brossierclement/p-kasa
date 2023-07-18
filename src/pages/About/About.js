import "../About/About.css";
import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import aboutBanner from "../../assets/images/about-banner.svg";
import DropdownPackage from "../../components/Dropdown/DropdownPackage/DropdownPackage";
import Footer from "../../components/Footer/Footer";
import whiteKasa from "../../assets/icons/white-kasa.svg";

function About() {
  return (
    <React.Fragment>
      <Header />
      <Banner src={aboutBanner} />
      <DropdownPackage />
      <Footer src={whiteKasa} copyright={"© 2020 Kasa. All rights reserved"} />
    </React.Fragment>
  );
}

export default About;
