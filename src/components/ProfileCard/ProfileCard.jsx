import "./styles.css";
import { profileData } from "./data";
import userAvatar from "../../assets/avatar.jpg"

function ProfileCard() {
  // Получить из объекта profileData все свойства и сохранить их в отдельные переменные

  const { name, avatar, profession, hobby } = userData; 
  return (
    <div className="profile-card-wrapper">
      {/* Первый вариант работы с картинкой - абсолютный путь */}
      {/* <img src={userData.avatar} className="card-img" alt="avatar image"/> */}
      {/* Второй вариант работы с картинкой - относительный путь (из папки проекта)*/}
      <img src={userAvatar} className="card-img" alt="avatar image"/>
      <h3>{name}</h3>
      <div>Occupation: {profession}</div>
      <div>Hobby: {hobby}</div>
    </div>
  );
}

export default ProfileCard;