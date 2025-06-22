import { useSelector } from "react-redux";

const ProductItems = () => {
  const products = useSelector((state) => state.product);
        console.log(products)
  return (
    <>
      {products.length > 0 ? (
        products.map((productItems, idx) => <div key={idx} className="lws-productCard">
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
                QTY <span className="lws-quantity">{productItems.quantity}</span>
              </p>
            </div>
            <button className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>)
      ) : (
        <div className="text-center text-2xl font-semibold">No Products Available</div>
      )}
    </>
  );
};

export default ProductItems;

// https://i.ibb.co/xqFKBsSY/shirt.jpg
// https://i.ibb.co/TqnWFXcT/shoes.jpg
