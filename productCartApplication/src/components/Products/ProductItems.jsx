import { useDispatch, useSelector } from "react-redux";

import { DecreaseProductQnt } from "../../redux/product/actionsTypes";
import { AddToCart } from "../../redux/cart/actionTypes";

const ProductItems = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const handleAddToCart = (id) => {
  const selectedProduct = products.find((p) => p.id === id);
  if (selectedProduct && Number(selectedProduct.quantity) > 0) {
    dispatch({ type: AddToCart, payload: selectedProduct });
    dispatch({ type: DecreaseProductQnt, payload: id });
  }
};

  return (
    <>
      {products.length > 0 ? (
        products.map((productItems) => (
          <div key={productItems.id} className="lws-productCard">
            <img
              className="lws-productImage"
              src={productItems.image}
              alt="product"
            />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">{productItems.productName}</h4>
              <p className="lws-productCategory">{productItems.category}</p>
              <div className="flex items-center justify-between pb-2">
                <p className="productPrice">
                  BDT <span className="lws-price">{productItems.price}</span>
                </p>
                <p className="productQuantity">
                  QTY{" "}
                  <span className="lws-quantity">{productItems.quantity}</span>
                </p>
              </div>
              <button
                onClick={() =>handleAddToCart(productItems.id)}
                className={`lws-btnAddToCart ${productItems.quantity < 0 && "disabled" }`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-2xl font-semibold">
          No Products Available
        </div>
      )}
    </>
  );
};

export default ProductItems;

// https://i.ibb.co/xqFKBsSY/shirt.jpg
// https://i.ibb.co/TqnWFXcT/shoes.jpg
