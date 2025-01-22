import "./styles.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { buttonData } from "./data";

function Homework02() {
  return (
    <div className="homework03-wrapper">
      <form className="form-element">
        <Input
          name="email-input"
          type="text"
          placeholder="Enter your email"
          label="Email*"
          id="email-input-id"
        />
        <Button name={buttonData.name} type={buttonData.type} />
      </form>
    </div>
  );
}

export default Homework02;