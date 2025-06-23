import { AddToCart } from "./actionTypes";

export const addToCart = (cartItems) => {
  return { type: AddToCart, payload: cartItems };
};
