import { createStore } from "redux";
import combineReducer from "./rootReducer.js";

const store = createStore(combineReducer);

export default store;
