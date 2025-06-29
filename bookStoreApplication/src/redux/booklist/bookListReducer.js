import { ADDBOOK, LOADED } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case LOADED:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
