import { combineReducers } from "@reduxjs/toolkit";
import skiilsSlice from "../slice/skillSlice";
import picSlice from "../slice/Slices";
import personalSlice from "../slice/personalSlice";
import nameSlice from "../slice/nameSlice";
import languageSlice from "../slice/languageSlice";
import internashipSlice from "../slice/internSlice";
import hobbiesSlice from "./../slice/hobboies";
import educationSlice from "../slice/educationSlice";
import experienceSlice from "./../slice/experience";
const rootReducer = combineReducers({
  skilldata: skiilsSlice,
  picdata: picSlice,
  personaldata: personalSlice,
  namedata1: nameSlice,
  languagedata: languageSlice,
  interdata: internashipSlice,
  hobbies: hobbiesSlice,
  education: educationSlice,
  experience: experienceSlice,
});
export default rootReducer;
