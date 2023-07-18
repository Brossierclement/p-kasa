import "../DropdownPackage/DropdownPackage.css";
import details from "../../../data/Details.json";
import Dropdown from "../Dropdown";

function DropdownPackage() {
  return (
    <div id="dropdownPackage">
      {details.map((item) => (
        <Dropdown key={item.id} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default DropdownPackage;
