import { AddToCart } from "./actionTypes";

export const addProduct = (cartItems) => {
  return { type: AddToCart, payload: cartItems };
};
