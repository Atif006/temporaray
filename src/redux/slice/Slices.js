import { createSlice } from "@reduxjs/toolkit";

const picSlice = createSlice({
  name: "ProfilePic",
  initialState: [],
  reducers: {
    addPrfoile(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export default picSlice.reducer;

export const { addPrfoile } = picSlice.actions;
