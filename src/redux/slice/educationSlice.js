import { createSlice } from "@reduxjs/toolkit";
const educationSlice = createSlice({
  name: "education",
  initialState: [],
  reducers: {
    addeductaion(state, action) {
      state.push(action.payload);
    },
  },
});
export default educationSlice.reducer;
export const { addeductaion } = educationSlice.actions;
