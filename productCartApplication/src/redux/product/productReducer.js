import { AddedProduct } from "./actionsTypes";

const initialState = [
  {
    id: 1,
    productName: "Spring and summerShoes",
    category: "Mens shoes",
    imgUrl:
      "https://unsplash.com/photos/unpaired-orange-and-white-converse-all-star-high-top-IjzhMi4Cw3w",
    price: "400",
    quantity: "10",
  },
];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AddedProduct:
      return [...state, console.log("product is coming")];

    default:
      return state;
  }
};

export default reducer;
