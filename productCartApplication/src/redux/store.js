import { createStore } from "redux";
import combineReducer from "./rootReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(combineReducer, composeWithDevTools());

export default store;
