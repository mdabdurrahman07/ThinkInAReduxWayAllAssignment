import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  deleteItems,
  incrementItem,
} from "../../redux/cart/actions";
const CartCard = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(products)

  return (
    <>
      {products.length > 0 ? (
        products?.map((product) => {
          const total = product.price * product.quantity;
          return (
            <div key={product.id} className="cartCard">
              <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img
                  className="lws-cartImage"
                  src={product.image}
                  alt="product"
                />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                  <h4 className="lws-cartName">{product.productName}</h4>
                  <p className="lws-cartCategory">{product.category}</p>
                  <p>
                    BDT <span className="lws-cartPrice">{product.price}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => dispatch(incrementItem(product.id))}
                    className="lws-incrementQuantity"
                  >
                    <i className="text-lg fa-solid fa-plus"></i>
                  </button>
                  <span className="lws-cartQuantity">{product.quantity}</span>
                  <button
                    onClick={() => dispatch(decrementItem(product.id))}
                    disabled={product.quantity <= 1}
                    className={`lws-decrementQuantity ${
                      product.quantity <= 1 ? "disabled" : ""
                    }`}
                  >
                    <i className="text-lg fa-solid fa-minus"></i>
                  </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">
                  BDT <span className="lws-calculatedPrice">{total}</span>
                </p>
              </div>
              {/* <!-- delete button --> */}
              <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button
                  onClick={() => dispatch(deleteItems(product.id))}
                  className="lws-removeFromCart"
                >
                  <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-2xl font-semibold">
          Please Add a product to cart
        </div>
      )}
    </>
  );
};

export default CartCard;
