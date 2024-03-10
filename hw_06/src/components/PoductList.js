import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  toggleProductAvailability,
} from "../reducers/productSlice";

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>{product.available ? "Available" : "Out of Stock"}</p>
          <button onClick={() => dispatch(deleteProduct(product.id))}>
            Delete
          </button>
          <button
            onClick={() => dispatch(toggleProductAvailability(product.id))}
          >
            Toggle Availability
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
