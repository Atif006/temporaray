// import { createSlice } from "@reduxjs/toolkit";
// const nameSlice = createSlice({
//   name: "namedata",
//   initialState: [],
//   reducers: {
//     addName(state, action) {
//       state.push(action.payload);
//       console.log("name slice " + action.payload);
//     },
//   },
// });
// export default nameSlice.reducer;
// export const { addName } = nameSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "namedata",
  initialState: [],
  reducers: {
    addName(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export default nameSlice.reducer;

export const { addName } = nameSlice.actions;
