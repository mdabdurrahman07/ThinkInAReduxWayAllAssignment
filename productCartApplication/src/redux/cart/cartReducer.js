import {
  AddToCart,
  DecrementItem,
  DeleteItems,
  IncrementItem,
} from "./actionTypes.js";
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
    case DeleteItems:
      return state.filter((item) => item.id !== action.payload);

    case IncrementItem:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case DecrementItem:
  return state.map((product) => {
    if (product.id === action.payload) {
      if (product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }
    return product;
  });

    default:
      return state;
  }
};

export default reducer;
