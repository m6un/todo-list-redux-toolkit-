//At first we have to import configure store from reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
//now we export a store which we will make here using configurestore.
//This will recieve a dict where in we specify the reducers in another dict.

import todoReducer from "./TodoSlice"

export default configureStore({
  reducer: {
    todos : todoReducer
  },
});
