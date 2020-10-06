import React from "react";
import { Link } from "react-router-dom";
import CartProductList from "../cart/CartProductList";

/**
 * Cart page
 */
export default function Cart() {
  return (
    <div>
      <h1>Cart</h1>
      <Link to="/">Home</Link>
      <hr />
      <CartProductList />
    </div>
  );
}
