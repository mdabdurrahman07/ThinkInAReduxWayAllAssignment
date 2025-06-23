import { AddedProduct } from "./actionsTypes";

  
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AddedProduct:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
