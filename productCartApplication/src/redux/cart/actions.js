import { AddToCart, DecrementItem, DeleteItems, IncrementItem } from "./actionTypes";

export const addToCart = (cartItems) => {
  return { type: AddToCart, payload: cartItems };
};

export const deleteItems = (id) => {
  return { type: DeleteItems, payload: id };
};
export const incrementItem = (id) => {
  return { type: IncrementItem, payload: id };
};
export const decrementItem = (id) => {
  return { type: DecrementItem, payload: id };
};
