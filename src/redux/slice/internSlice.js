import { createSlice } from "@reduxjs/toolkit";
const internashipSlice = createSlice({
  name: "internship",
  initialState: [],
  reducers: {
    addinternship(state, action) {
      state.push(action.payload);
    },
  },
});
export default internashipSlice.reducer;
export const { addinternship } = internashipSlice.actions;
