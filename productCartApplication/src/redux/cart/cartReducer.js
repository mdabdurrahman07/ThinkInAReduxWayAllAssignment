import { AddToCart } from "./actionTypes.js";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AddToCart: {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    default:
      return state;
  }
};

export default reducer;
