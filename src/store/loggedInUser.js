import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLoggedInUser = createAction("SET_LOGGED_IN_USER");

const initialState = [];

export default createReducer(initialState, {
  [setLoggedInUser]: (state, action) => action.payload,
});
