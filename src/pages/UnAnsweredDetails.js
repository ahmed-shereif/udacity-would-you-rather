import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { _getUsers, _getQuestions } from "../data";

import { _saveQuestionAnswer } from "../data";

function UnAnswered() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [SelectedOption, setSelectedOption] = useState("");

  const [toggleLoading, setToggleLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const { id } = useParams();

  const { questions, users, currentUser } = useSelector(
    (state) => state.StateUsers
  );

  const authedUser = currentUser.id;

  const selectedQuest = questions[id];

  const qid = selectedQuest.id;
  const userQuest = users[selectedQuest.author];
  const { avatarURL } = userQuest;

  const getUsersData = async (e) => {
    e.preventDefault();
    if (SelectedOption === "") {
      e.preventDefault();
      alert("please answer the poll first");
    } else if (SelectedOption) {
      setToggleLoading(true);
      e.preventDefault();
      await _saveQuestionAnswer(authedUser, qid, SelectedOption);

      const usersData = await _getUsers();
      const questionsData = await _getQuestions();
      dispatch({
        type: "ANSWER_QUERTION",
        payload: {
          users: usersData,
          questions: questionsData,
          currentUser: usersData[currentUser.id],
        },
      });

      history.push("/home");
    }
  };

  return (
    <div className="answer__details">
      <img src={avatarURL} alt="" />
      <h3>would you rather?</h3>
      <form onChange={handleChange} className="form_answer">
        <div className="form_answer_input">
          <input
            type="radio"
            id="optionOne"
            value="optionOne"
            checked={SelectedOption === "optionOne"}
          />
          <label htmlFor="optionOne">{selectedQuest.optionOne.text} </label>
          <input
            type="radio"
            id="optionTwo"
            value="optionTwo"
            checked={SelectedOption === "optionTwo"}
          />
          <label htmlFor="optionTwo">{selectedQuest.optionTwo.text}</label>
        </div>

        <button onClick={getUsersData}>
          {toggleLoading ? "Submit..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default UnAnswered;
