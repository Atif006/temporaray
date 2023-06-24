import { createSlice } from "@reduxjs/toolkit";
const experienceSlice = createSlice({
  name: "experience",
  initialState: [],
  reducers: {
    addexperience(state, action) {
      state.push(action.payload);
    },
  },
});
export default experienceSlice.reducer;
export const { addexperience } = experienceSlice.actions;
