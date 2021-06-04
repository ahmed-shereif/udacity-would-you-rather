import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/answeredQuestions.css";

function AnsweredQuestion({ quest }) {
  const { currentUser, users } = useSelector((state) => state.StateUsers);
  const userQuest = users[quest.author];
  const userChoise = currentUser.answers[quest.id];
  const answer = quest[userChoise].text;
  console.log("userQuest.avatarURL", userQuest.avatarURL);
  return (
    <div className="question">
      <div className="question__left">
        <img src={userQuest.avatarURL} alt="" />
      </div>
      <div className="question__right">
        <h3>would you rather?</h3>
        <p>{answer}</p>
        <Link to={`/question/${quest.id}`}>
          <button>view poll</button>
        </Link>
      </div>
    </div>
  );
}

export default AnsweredQuestion;
