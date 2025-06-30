import { ADDBOOK, DELETE, LOADED, UPDATE } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case LOADED:
      return action.payload;
    case DELETE:
      return state.filter((book) => book.id !== action.payload)
    case UPDATE:
      return state.map((book) => book.id === action.payload.id ? action.payload : book)
    default:
      return state;
  }
};

export default reducer;
