import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLoggedInUser = createAction("SET_LOGGED_IN_USER");
export const addToFavoritesDispatch = createAction("ADD_TO_FAVORITES");
export const removeFromFavoritesDispatch = createAction(
  "REMOVE_FROM_FAVORITES"
);

const initialState = {};

export default createReducer(initialState, {
  [setLoggedInUser]: (state, action) => action.payload,
  [addToFavoritesDispatch]: (state, action) => {
    if (!state.name) {
      console.error("You need to be logged in to add items to favorites");
      return state;
    }
    if (state.favorites.find((fav) => fav === action.payload)) {
      console.error("Item already in favorites");
      return state;
    }
    console.log("Item added to favorites");
    return { ...state, favorites: [...state.favorites, action.payload] };
  },
  [removeFromFavoritesDispatch]: (state, action) => {
    console.log("Item removed from favorites");
    return {
      ...state,
      favorites: state.favorites.filter((fav) => fav !== action.payload),
    };
  },
});
