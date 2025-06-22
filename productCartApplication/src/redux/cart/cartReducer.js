import { AddToCart } from "./actionTypes.js";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AddToCart:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
