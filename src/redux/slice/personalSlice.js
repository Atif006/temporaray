import { createSlice } from "@reduxjs/toolkit";
const personalSlice = createSlice({
  name: "personal",
  initialState: [],
  reducers: {
    addpersonal(state, action) {
      state.push(action.payload);
    },
  },
});
export default personalSlice.reducer;
export const { addpersonal } = personalSlice.actions;
