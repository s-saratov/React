import "./App.css";

// Импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from './components/Button/Button'
// import Button from "./components/Button/Button";

// === Lessons ===
// import Lesson02 from "./lessons/Lesson_02/Lesson_02";
import Lesson03 from "./lessons/Lesson_03/Lesson_03";

// === Homeworks ===
// import Homework02 from "./homeworks/Homework_02/Homework_02";

function App() {
  return (
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      {/* --- Topic: Components */}
      {/* <Lesson02 /> */}
      {/* <Homework02 /> */}
      {/* --- Topic: Props */}
      <Lesson03 />
    </div>
  );
}

export default App;
