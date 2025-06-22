import { AddedProduct } from "./actionsTypes";

export const addProduct = (product) => {
  return { type: AddedProduct, payload: product };
};
