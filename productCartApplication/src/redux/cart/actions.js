import { AddToCart } from "./actionTypes";

export const addToCart = (cartItems) => {
  return { type: AddToCart, payload: cartItems };
};

export const decreaseProductQnt = (id) => {
  return {
    type: decreaseProductQnt,
    payload: id,
  };
};
