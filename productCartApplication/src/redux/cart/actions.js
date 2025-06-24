import { AddToCart, DeleteItems } from "./actionTypes";

export const addToCart = (cartItems) => {
  return { type: AddToCart, payload: cartItems };
};

export const deleteItems = (id) => {
  return {type: DeleteItems, payload: id}
}
