import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FullRouteCollection from "./routing/FullRouteCollection";
import "../App.css";
import CartProvider from "../providers/CartProvider";

/**
 * App entrypoint
 */
export default function App() {
  return (
    <CartProvider>
      <Router>
        <FullRouteCollection />
      </Router>
    </CartProvider>
  );
}
