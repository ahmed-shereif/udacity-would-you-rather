import { _getUsers, _getQuestions } from "../data";

export const getUsersData = () => async (dispatch) => {
  const usersData = await _getUsers();
  const questionsData = await _getQuestions();

  dispatch({
    type: "USERS_DATA",
    payload: {
      users: usersData,
      questions: questionsData,
      currentUser: null,
    },
  });
};
