import React from "react";
import { Switch as SwitchRouter, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

/**
 * All routes in the app
 */
export default function FullRouteCollection() {
  return (
    <SwitchRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </SwitchRouter>
  );
}
