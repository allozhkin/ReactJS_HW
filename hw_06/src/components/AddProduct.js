import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/productSlice";


function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    available: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product }));
    setProduct({ name: "", description: "", price: "", available: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product name"
      />
      <input
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product description"
      />
      <input
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Product price"
      />
      <label>
        <input
          type="checkbox"
          name="available"
          checked={product.available}
          onChange={handleChange}
        />
        Available
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
