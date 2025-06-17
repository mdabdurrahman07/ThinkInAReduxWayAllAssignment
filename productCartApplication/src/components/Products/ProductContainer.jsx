import React from "react";
import ProductItems from "./ProductItems";
import ProductForm from "./ProductForm";

const ProductContainer = () => {
  return (
    <main className="py-16">
      <div class="productWrapper">
        <div lass="productContainer" id="lws-productContainer">
          <ProductItems />
        </div>
        <ProductForm />
      </div>
    </main>
  );
};

export default ProductContainer;
