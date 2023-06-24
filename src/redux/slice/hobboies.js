import { createSlice } from "@reduxjs/toolkit";
const hobbiesSlice = createSlice({
  name: "hobbies",
  initialState: [],
  reducers: {
    addhobbies(state, action) {
      state.push(action.payload);
    },
  },
});
export default hobbiesSlice.reducer;
export const { addhobbies } = hobbiesSlice.actions;
