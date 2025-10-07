import { configureStore } from "@reduxjs/toolkit";
import showLangMenuReducer from "./slices/showLangMenu";
import showPopUpReducer from "./slices/showPopUp";
const store = configureStore({
  reducer: {
    showLangMenu: showLangMenuReducer,
    showPopUp: showPopUpReducer,
  },
});

export default store;
