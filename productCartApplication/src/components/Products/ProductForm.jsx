import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/product/actions";

const ProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const generateId = () => {
  if (!products || products.length === 0) return 1;
  const maxId = Math.max(...products.map((p) => Number(p.id)));
  return maxId + 1;
};
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const id = generateId();
    dispatch(addProduct({ id, ...data }));
  };
  return (
    <div class="formContainer">
      <h4 class="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit}
        class="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div class="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            class="addProductInput"
            id="lws-inputName"
            type="text"
            name="productName"
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div class="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            class="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div class="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            class="addProductInput"
            id="lws-inputImage"
            type="text"
            name="image"
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div class="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div class="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              class="addProductInput"
              type="number"
              name="price"
              id="lws-inputPrice"
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div class="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              class="addProductInput"
              type="number"
              name="quantity"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" class="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
