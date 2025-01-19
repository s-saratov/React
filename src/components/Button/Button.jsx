// Импорт стилей
import "./styles.css";

function Button() {
  const isGetButton = true;
  const buttonType = "submit";

  return (
    <button className="main-button" type={buttonType}>
      {isGetButton ? "GET" : "SEND"}
    </button>
  );
}

// Экспорт по умолчанию (он может быть в файле только один)
export default Button;
