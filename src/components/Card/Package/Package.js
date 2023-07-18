import "../Package/Package.css";
import housing from "../../../data/Housing.json";
import Card from "../Card";

function Package() {
  return (
    <div id="package">
      {housing.map((item) => (
        <Card key={item.id} cover={item.cover} title={item.title} />
      ))}
    </div>
  );
}

export default Package;
