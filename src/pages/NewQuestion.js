import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getQuestions, _getUsers, _saveQuestion } from "../data";
import { useHistory } from "react-router-dom";
import "../styles/newquestion.css";

function NewQuestion() {
  let history = useHistory();
  const { currentUser } = useSelector((state) => state.StateUsers);
  const [optionOne, setoptionOne] = useState("");
  const [optionTwo, setoptionTwo] = useState("");

  const dispatch = useDispatch();

  const handleChangeOptionOne = (e) => {
    const { value } = e.target;
    setoptionOne(value);
  };
  const handleChangeOptionTwo = (e) => {
    const { value } = e.target;

    setoptionTwo(value);
  };

  const question = {
    optionOneText: optionOne,
    optionTwoText: optionTwo,
    author: currentUser.id,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (optionOne === "" || optionTwo === "") {
      alert("please add add a poll first");
    } else if (optionOne != "" && optionTwo != "") {
      e.preventDefault();
      await _saveQuestion(question);

      const usersData = await _getUsers();
      const questionsData = await _getQuestions();
      dispatch({
        type: "ADD_QUESTION",
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
    <div className="add_question">
      <h1>Add New Poll</h1>

      <form>
        <h3>Would You Rather ?</h3>
        <textarea
          placeholder="Enter the first option"
          value={optionOne}
          name="optionOne"
          onChange={handleChangeOptionOne}
        />
        <textarea
          placeholder="Enter the second option"
          value={optionTwo}
          name="optionTwo"
          onChange={handleChangeOptionTwo}
        />
        <button onClick={handleSubmit}> submit</button>
      </form>
    </div>
  );
}

export default NewQuestion;
