import "./styles.css";
import { profileData } from "./data";

function ProfileCard() {
  return (
    <div className="profile-card-wrapper">
      <img src={profileData.user_avatar} />
      <h3>{profileData.name}</h3>
      <div>Occupation: {profileData.job}</div>
      <div>Hobby: {profileData.hobby}</div>
    </div>
  );
}

export default ProfileCard;