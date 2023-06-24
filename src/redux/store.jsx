import { configureStore } from "@reduxjs/toolkit";
import picSlice from "../redux/slice/Slices";
import skiilsSlice from "../redux/slice/skillSlice";
import educationSlice from "./slice/educationSlice";
import experienceSlice from "./slice/experience";
import hobbiesSlice from "./slice/hobboies";
import internSlice from "./slice/internSlice";
import languageSlice from "./slice/languageSlice";
import nameSlice from "./slice/nameSlice";
import personalSlice from "./slice/personalSlice";

const store = configureStore({
  reducer: {
    skilldata: skiilsSlice,
    picdata: picSlice,
    education: educationSlice,
    experience: experienceSlice,
    hobbies: hobbiesSlice,
    internship: internSlice,
    language: languageSlice,
    name: nameSlice,
    personal: personalSlice,
  },
});
export default store;
