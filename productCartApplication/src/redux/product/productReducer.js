import { AddedProduct, DecreaseProductQnt } from "./actionsTypes";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AddedProduct:
      return [...state, action.payload];
    case DecreaseProductQnt:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: Number(product.quantity) - 1 }
          : product
      );
    default:
      return state;
  }
};

export default reducer;
