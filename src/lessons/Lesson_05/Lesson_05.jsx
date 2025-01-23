import { v4 } from "uuid";

import "./styles.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalsData } from "./data";

function Lesson05() {
  // С помощью метода map на основе данных animalData создаём массив готовых элементов для их отображения на экране

  const animalCards = animalsData.map((animalData) => {
    return (
      // Key должен быть в каждой обёртке
      <div key={v4()}>
        <h2>Мадагаскар</h2>
        <AnimalCard
          // Ключ - это дополнительный атрибут, который требуется при работе с массивом элементов,
          // который мы получаем при работе с map. Он требуется для оптимизации работы react и должен быть уникальным.
          // key={animalData.id}
          // key={v4()}
          animalName={animalData.name}
          animalSpecies={animalData.species}
          animalImg={animalData.image}
        />
      </div>
    );
  });

  console.log(animalCards);

  return <div className="lesson05-wrapper">{animalCards}</div>;
}

export default Lesson05;