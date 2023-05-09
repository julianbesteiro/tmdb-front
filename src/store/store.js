import { configureStore } from "@reduxjs/toolkit";

import contentReducer from "./content";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    content: contentReducer,
    user: userReducer,
  },
});

export default store;
