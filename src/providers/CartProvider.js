import React, { createContext, useEffect, useState } from "react";

// Init cart context
export const CartContext = createContext({});

/**
 * Cart provider
 *
 * @param {{ children?: React.ReactNode }} props
 */
export default function CartProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem("cart");
    if (Array.isArray(products) && products.length < 1 && storage) {
      setProducts(JSON.parse(storage));
    }
  }, []);

  /**
   * Add product to cart
   *
   * @param {number} productId
   */
  function addToCart(productId) {
    const newState = [...products, productId];
    setProducts(newState);
    localStorage.setItem("cart", JSON.stringify(newState));
  }

  /**
   * Remove product from cart
   *
   * @param {number} productId
   */
  function removeFromCart(productId) {
    const newState = products.filter((id) => id !== productId);
    setProducts(newState);
    localStorage.setItem("cart", JSON.stringify(newState));
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        products,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
