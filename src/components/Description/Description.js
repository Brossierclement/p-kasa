import React from "react";
import "../Description/Description.css";
import Dropdown from "../Dropdown/Dropdown";
import Tag from "./Tag";
import Stars from "./Stars";
import redStar from "../../assets/icons/red-star.png";
import greyStar from "../../assets/icons/grey-star.png";

function Description({card}) {
  return (
    <div id="description">
      <div id="descriptionTitleLocation">
        <h2>{card.title}</h2>
        <p>{card.location}</p>
      </div>
      <div id="descriptionNamePicture">
        <p>{card.host.name}</p>
        <img src={card.host.picture} alt="profil" />
      </div>
      <div id="descriptionTags">
        {card.tags.map((tag, index) => (
          <Tag key={index} tags={tag} />
        ))}
      </div>
      <div id="descriptionRating">
        <Stars star={greyStar} rating={card.rating} filledStar={redStar} />
      </div>
      <div className="descriptionDropdown">
        <Dropdown title="Description" text={card.description} />
        <Dropdown title="Equipements" equipments={card.equipments} />
      </div>
    </div>
  );
}

export default Description;
