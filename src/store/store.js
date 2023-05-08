import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies";
import loggedInUserReducer from "./loggedInUser";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    loggedInUser: loggedInUserReducer,
  },
});

export default store;
