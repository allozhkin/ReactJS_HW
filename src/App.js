import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/product" component={Product} />
      <Route path="/registration" component={Registration} />
    </BrowserRouter>
  );
}

export default App;
