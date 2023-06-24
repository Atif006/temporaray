import { createSlice } from "@reduxjs/toolkit";
const skiilsSlice = createSlice({
  name: "skills",
  initialState: [],
  reducers: {
    addSkills(state, action) {
      state.push(action.payload);
    },
  },
});
export default skiilsSlice.reducer;
export const { addSkills } = skiilsSlice.actions;
