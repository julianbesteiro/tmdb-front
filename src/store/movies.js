import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMovies = createAction("SET_MOVIES");

const initialState = [];

export default createReducer(initialState, {
  [setMovies]: (state, action) => action.payload,
});
