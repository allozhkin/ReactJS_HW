import React from "react";
import { Provider } from "react-redux";
import'./App.css';
import store from "./store/store";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/PoductList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Product Catalog Management</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
