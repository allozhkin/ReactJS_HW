import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    toggleProductAvailability: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products[index].available = !state.products[index].available;
      }
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  updateProduct,
  toggleProductAvailability,
} = productSlice.actions;

export default productSlice.reducer;
