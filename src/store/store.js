// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import personalizedFeedFilterReducer from "./personalizedFeedFilterSlice";

const store = configureStore({
  reducer: {
    personalizedFeedFilter: personalizedFeedFilterReducer,
  },
});

export default store;
