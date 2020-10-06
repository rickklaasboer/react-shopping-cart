import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../product/ProductList";

/**
 * Home page
 */
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/cart">Cart</Link>
      <hr />
      <ProductList />
    </div>
  );
}
