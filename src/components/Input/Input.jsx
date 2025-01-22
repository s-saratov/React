import "./styles.css";

function Input({ name, type, placeholder, label, id }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
