import "../Card/Card.css";

function Card({ cover, title }) {
  return (
    <div id="card">
      <img id="cardImg" src={cover} alt="cover" />
      <h4 id="cardTitle">{title}</h4>
    </div>
  );
}

export default Card;
