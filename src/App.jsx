import "./App.css";
import Homework02 from "./homeworks/Homework_02/Homework_02";
import Lesson02 from "./lessons/Lesson_02/Lesson_02";

// Импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from './components/Button/Button'
// import Button from "./components/Button/Button";

function App() {
  return (
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      <Lesson02 />
      <Homework02 />
    </div>
  );
}

export default App;
