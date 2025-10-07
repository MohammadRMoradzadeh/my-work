import { createSlice } from "@reduxjs/toolkit";
const initialState = "none";

const showPopUp = createSlice({
  name: "showPopUp",
  initialState,
  reducers: {
    setPopUp: (state, action) => action.payload,
  },
});

export default showPopUp.reducer;
export const { setPopUp } = showPopUp.actions;
