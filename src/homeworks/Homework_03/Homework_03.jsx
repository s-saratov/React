import "./styles.css";
import Input from "../../components/AnimalCard/Input/Input";
import Button from "../../components/Button/Button";
import { inputData, buttonData } from "./data";

function Homework02() {
  return (
    <form className="homework03-wrapper">
      <Input
        name={inputData.name}
        type={inputData.type}
        placeholder={inputData.placeholder}
        label={inputData.label}
      />
      <Button name={buttonData.name} type={buttonData.type} />
    </form>
  );
}

export default Homework02;