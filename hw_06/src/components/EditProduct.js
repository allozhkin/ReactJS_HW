import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../reducers/productSlice";

function EditProduct({ product }) {
  const [editedProduct, setEditedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(editedProduct));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={editedProduct.name}
        onChange={handleChange}
        placeholder="Product name"
      />
      <input
        name="description"
        value={editedProduct.description}
        onChange={handleChange}
        placeholder="Product description"
      />
      <input
        name="price"
        value={editedProduct.price}
        onChange={handleChange}
        placeholder="Product price"
      />
      <label>
        <input
          type="checkbox"
          name="available"
          checked={editedProduct.available}
          onChange={handleChange}
        />
        Available
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
}

export default EditProduct;
