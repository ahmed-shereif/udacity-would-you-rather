import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/answeredQuestions.css";

function UnAnsweredQuestion({ quest }) {
  const { users } = useSelector((state) => state.StateUsers);
  const userQuest = users[quest.author];

  console.log("userQuest.avatarURL", userQuest.avatarURL);
  return (
    <div className="question">
      <div className="question__left">
        <img src={userQuest.avatarURL} alt="" />
      </div>
      <div className="question__right">
        <h3>would you rather?</h3>
        <p>{quest.optionOne.text}</p>
        <p>{quest.optionTwo.text}</p>

        <Link to={`/unansweredquestion/${quest.id}`}>
          <button>answer this poll</button>
        </Link>
      </div>
    </div>
  );
}

export default UnAnsweredQuestion;
