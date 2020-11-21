import React, { useState, useCallback } from 'react';
import './style.css';

export const Joke = ({ userId, userName, text, likes, dislikes }) => {
  const [addLikes, setAddLikes] = useState(likes);
  const [addDislikes, setAddDislikes] = useState(dislikes);

  const handleClickLikes = useCallback(() => {
    setAddLikes(addLikes + 1);
  }, [addLikes]);
  const handleClickDislikes = useCallback(() => {
    setAddDislikes(addDislikes + 1);
  }, [addDislikes]);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={`./assets/img/${userId}.png`} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleClickLikes}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {addLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleClickDislikes}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {addDislikes}
        </span>
      </div>
    </div>
  );
};
