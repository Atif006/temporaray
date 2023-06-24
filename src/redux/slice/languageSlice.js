import { createSlice } from "@reduxjs/toolkit";
const languageSlice = createSlice({
  name: "skills",
  initialState: [],
  reducers: {
    addLanguage(state, action) {
      state.push(action.payload);
      console.log("language" + action.payload);
    },
  },
});
export default languageSlice.reducer;
export const { addLanguage } = languageSlice.actions;
