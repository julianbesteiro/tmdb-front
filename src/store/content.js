import { createAction, createReducer } from "@reduxjs/toolkit";

export const setContent = createAction("SET_CONTENT");

export const setType = createAction("SET_TYPE");

const initialState = { content: [], type: "" };

export default createReducer(initialState, {
  [setContent]: (state, action) => {
    state.content = action.payload;
  },
  [setType]: (state, action) => {
    state.type = action.payload;
  },
});
