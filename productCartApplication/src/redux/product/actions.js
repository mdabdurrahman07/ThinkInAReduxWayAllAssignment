import { AddedProduct } from "./actionsTypes";

export const addProduct = (items) => {
  return { type: AddedProduct, payload: items };
};
export const decreaseProductQnt = (id) => {
  return {
    type: decreaseProductQnt,
    payload: id,
  };
};
