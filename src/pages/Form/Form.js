import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import "../Form/Form.css";
import housing from "../../data/Housing.json";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";

function Form() {
  const { id } = useParams();
  console.log({ id });

  const card = housing.find((item) => item.id === id);

  if (!card) {
    return <div>Cette carte n'existe pas.</div>;
  }
  return (
    <>
      <Header />
      <div>
        <Carousel pictures={card.pictures} />
      </div>
      <Description />
      <Footer />
    </>
  );
}

export default Form;
