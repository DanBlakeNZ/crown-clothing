// Root Reducer represent all of the state of our application.
// Combines all of the other reducer states together.

import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer.js";

export default combineReducers({
  user: UserReducer,
});
