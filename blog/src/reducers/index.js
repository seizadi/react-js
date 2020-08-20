import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import usersReducer from "./UsersReducer";

export default combineReducers({
  users: usersReducer,
  posts: postsReducer
});
