import "./App.css";

// Импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from './components/Button/Button'
// import Button from "./components/Button/Button";

// === Lessons ===
// import Lesson02 from "./lessons/Lesson_02/Lesson_02";
// import Lesson03 from "./lessons/Lesson_03/Lesson_03";
// import Lesson04 from "./lessons/Lesson_04/Lesson_04";

// === Homeworks ===
// import Homework02 from "./homeworks/Homework_02/Homework_02";
// import Homework03 from "./homeworks/Homework_03/Homework_03";
import Homework04 from "./homeworks/Homework_04/Homework_04";

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
      {/* <Lesson03 /> */}
      {/* <Homework03 /> */}
      {/* --- Topic: functions, hooks(useState) */}
      {/* <Lesson04 /> */}
      <Homework04 />
    </div>
  );
}

export default App;