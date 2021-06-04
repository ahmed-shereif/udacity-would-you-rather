import React, { useState } from "react";
import { useSelector } from "react-redux";
import Question from "../components/AnsweredQuestion";
import UnAnsweredQuestion from "../components/UnAnsweredQuestion";

import "../styles/home.css";

function Home() {
  const { currentUser, questions, users } = useSelector(
    (state) => state.StateUsers
  );

  const [toggleView, settoggleView] = useState(true);

  let { answers } = users[currentUser.id];

  //   convert answers object of the current user  into array of keys
  const answersArray = Object.keys(answers);

  //   get the questions of the current user
  const questionsArray = answersArray.map((quest) => questions[quest]);

  //     all questions id array
  const allQustionsIdArray = Object.keys(questions);

  //   get unanswered question
  let unansweredId = allQustionsIdArray.filter(
    (x) => !answersArray.includes(x)
  );

  const unansweredQuestionsArray = unansweredId.map(
    (quest) => questions[quest]
  );
  const sortUnanswered = unansweredQuestionsArray.sort((a, b) => {
    return a.timestamp > b.timestamp ? -1 : 1;
  });

  const sortAnswered = questionsArray.sort((a, b) => {
    return a.timestamp > b.timestamp ? -1 : 1;
  });
  return (
    <div className="home">
      <div className="home__toggle">
        <h4 onClick={() => settoggleView(true)}>Unanswered Questions</h4>
        <h4 onClick={() => settoggleView(false)}>Answered Questions</h4>
      </div>
      <div className="home__quest">
        {toggleView
          ? sortUnanswered.map((quest) => (
              <UnAnsweredQuestion quest={quest} key={quest.id} />
            ))
          : sortAnswered.map((quest) => (
              <Question quest={quest} key={quest.id} />
            ))}
      </div>
    </div>
  );
}

export default Home;
