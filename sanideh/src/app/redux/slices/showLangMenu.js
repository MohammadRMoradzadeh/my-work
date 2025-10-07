import { createSlice } from "@reduxjs/toolkit";
const initialState = false;

const showLangMenu = createSlice({
  name: "showLangMenu",
  initialState,
  reducers: {
    setShowLangMenu: (state) => true,
    unsetShowLangMenu: (state) => false,
  },
});

export default showLangMenu.reducer;
export const { setShowLangMenu, unsetShowLangMenu } = showLangMenu.actions;
