import { AddedProduct } from "./actionsTypes";

export const addProduct = (items) => {
  return { type: AddedProduct, payload: items};
};
