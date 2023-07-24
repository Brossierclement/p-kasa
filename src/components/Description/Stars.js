import React from "react";

function Stars({ star, rating, filledStar }) {
  const starsTable = [];
  for (let i = 0; i < 5; i++) {
    const starImage = i < rating ? filledStar : star;
    starsTable.push(<img key={i} src={starImage} alt="star" />);
  }
  return <span>{starsTable}</span>;
}

export default Stars;
