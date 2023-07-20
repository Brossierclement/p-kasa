import "../Card/Card.css";
import React from "react";
import { Link } from "react-router-dom";

function Card({ id, cover, title }) {
  console.log("ID of the current card:", id);
  return (
    <Link to={`/card/${id}`} className="card-link">
      <div id="card">
        <img id="cardImg" src={cover} alt="cover" />
        <h4 id="cardTitle">{title}</h4>
      </div>
    </Link>
  );
}

export default Card;
