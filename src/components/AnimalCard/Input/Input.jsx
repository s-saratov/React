import "./styles.css";

function Input({ name, type, placeholder, label }) {


  return (
    <div className="input-wrapper">
      <label for={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;
