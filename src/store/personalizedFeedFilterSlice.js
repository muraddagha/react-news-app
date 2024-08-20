import { createSlice } from "@reduxjs/toolkit";
import { API_SOURCES, LOCAL_STORAGE } from "../constants";

const initialFilterState = { author: "", category: "", source: "" };
const initialUrlState = `${API_SOURCES.NYTIMES.URL}articlesearch.json?q=election${API_SOURCES.NYTIMES.KEY}`;

const filter = localStorage.getItem(LOCAL_STORAGE.PERSONALIZED_FEED_STORAGE)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.PERSONALIZED_FEED_STORAGE)).filter
  : initialFilterState;

const url = localStorage.getItem(LOCAL_STORAGE.PERSONALIZED_FEED_STORAGE)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.PERSONALIZED_FEED_STORAGE)).url
  : initialUrlState;

const personalizedFeedFilterSlice = createSlice({
  name: "personalizedFeedFilter",
  initialState: { filter, url },
  reducers: {
    addFilter: (state, action) => {
      state.filter.author = action.payload.author ?? state.filter.author;
      state.filter.category = action.payload.category ?? state.filter.category;
      state.filter.source = action.payload.source ?? state.filter.source;
      state.url = action.payload.url ?? state.url;
      localStorage.setItem(LOCAL_STORAGE.PERSONALIZED_FEED_STORAGE, JSON.stringify(state));
    },
    clearFilter: (state) => {
      state.filter = initialFilterState;
      state.url = initialUrlState;
      localStorage.removeItem(LOCAL_STORAGE.PERSONALIZED_FEED_STORAGE);
    },
  },
});

export const { addFilter, clearFilter } = personalizedFeedFilterSlice.actions;
export default personalizedFeedFilterSlice.reducer;
