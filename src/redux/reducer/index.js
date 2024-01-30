import { combineReducers } from "@reduxjs/toolkit";
import blog from "../blog/blogSlice";
import user from "../user/userSlice";
export default combineReducers({
  blog,
  user,
});
