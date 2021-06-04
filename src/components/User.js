import React from "react";
import "../styles/user.css";

function User({ user }) {
  return (
    <div className="user">
      <div className="user_left">
        <img src={user.avatarURL} alt="" />
      </div>
      <div className="user_right">
        <h2>{user.name}</h2>
        <h3>Score</h3>
        <h3>{user.score}</h3>
      </div>
    </div>
  );
}

export default User;
