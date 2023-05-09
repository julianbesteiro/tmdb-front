import { createAction, createReducer } from "@reduxjs/toolkit";

export const setContent = createAction("SET_CONTENT");

const initialState = [];

export default createReducer(initialState, {
  [setContent]: (state, action) => action.payload,
});
