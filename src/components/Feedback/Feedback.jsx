import React, { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    
  const likeClick = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const dislikeClick = () => {
    setDislikes((prevValue) => prevValue + 1);
  };

  const resetClick = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="like-dislike-wrapper">
        <div className="likes-container">{likes}</div>
        <div className="button-wrapper">
          <Button name="Like" type="button" onClick={likeClick} />
        </div>
        <div className="button-wrapper">
          <Button name="Dislike" type="button" onClick={dislikeClick} />
        </div>
        <div className="likes-container">{dislikes}</div>
      </div>
      <div className="reset-wrapper">
          <Button name="Reset Results" type="button" onClick={resetClick} />
        </div>
    </div>
  );
}

export default Feedback;