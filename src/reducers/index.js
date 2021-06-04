import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  StateUsers: usersReducer,
  //   details: detailsReducers,
});

export default rootReducer;
