import React from "react";
import { createStore } from "redux";
import { combineReducers } from "redux";

const initState = {};

const authReducer = (state = initState, action) => {};

const projectReducer = (state = initState, action) => {};

/* const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
}); */

const store = createStore(authReducer);

export default store;
