const intialData = {
  users: {},
  questions: {},
  currentUser: {},
  toggleSubmit: false,
};

const usersReducer = (state = intialData, action) => {
  switch (action.type) {
    case "USERS_DATA":
      return {
        ...state,
        users: action.payload.users,
        questions: action.payload.questions,
      };
    case "UPDATE_CURRENTUSER":
      return {
        ...state,
        currentUser: state.users[action.payload.currentUser],
      };
    case "EMPTY_CURRENTUSER":
      return {
        ...state,
        currentUser: action.payload.null,
      };
    case "ANSWER_QUERTION":
      return {
        ...state,
        users: action.payload.users,
        questions: action.payload.questions,
        currentUser: action.payload.currentUser,
      };
    case "ADD_QUESTION":
      return {
        ...state,
        users: action.payload.users,
        questions: action.payload.questions,
        currentUser: action.payload.currentUser,
      };

    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
