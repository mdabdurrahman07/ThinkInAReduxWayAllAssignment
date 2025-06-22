import { AddToCart } from "./actionTypes.js";
const initialState = [
  {
    id: 1,
    cart: {},
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AddToCart:
      return [...state, console.log("cart is coming")];

    default:
      return state;
  }
};

export default reducer;
