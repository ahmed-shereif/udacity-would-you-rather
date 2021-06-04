import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/answeredDetails.css";

function AnsweredQuestionsDetails() {
  const { id } = useParams();

  const { questions, users } = useSelector((state) => state.StateUsers);
  const selectedQuest = questions[id];
  const userQuest = users[selectedQuest.author];
  const { avatarURL } = userQuest;

  console.log("userQuest", userQuest.avatarURL);
  return (
    <div className="answer__details">
      <img src={avatarURL} alt="" />

      <h3>would you rather?</h3>
      <div className="option">
        <p> {selectedQuest.optionOne.text} </p>
        <span>({selectedQuest.optionOne.votes.length} vote)</span>
        <span>
          {Math.floor((selectedQuest.optionOne.votes.length * 100) / 3)} %
        </span>
      </div>
      <div className="option">
        <p> {selectedQuest.optionTwo.text} </p>
        <span>({selectedQuest.optionOne.votes.length} vote)</span>
        <span>
          {Math.floor((selectedQuest.optionTwo.votes.length * 100) / 3)} %
        </span>
      </div>
    </div>
  );
}

export default AnsweredQuestionsDetails;
