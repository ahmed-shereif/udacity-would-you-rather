import React, { useState } from "react";
import { useSelector } from "react-redux";
import User from "../components/User";
import "../styles/leaderboard.css";

function LeaderBoard() {
  const { users } = useSelector((state) => state.StateUsers);

  const [leaderBoardUsers, setLeaderBoardUsers] = useState(users);

  const usersIdArray = Object.keys(leaderBoardUsers);

  const updatedScoreUser = () => {
    let scoreArray = [];
    usersIdArray.map((user) => {
      const { answers, questions } = leaderBoardUsers[user];

      const calcuateScore = Object.keys(answers).length + questions.length;
      const updateduser = {
        ...leaderBoardUsers[user],
        score: calcuateScore,
      };
      scoreArray.push(updateduser);
    });
    scoreArray.sort((a, b) => {
      return a.score > b.score ? -1 : 1;
    });
    return scoreArray;
  };
  const sortedArrayOFUsers = updatedScoreUser();
  console.log(sortedArrayOFUsers);
  return (
    <div className="leader_board">
      <h1>Leader Board</h1>
      {sortedArrayOFUsers.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default LeaderBoard;
