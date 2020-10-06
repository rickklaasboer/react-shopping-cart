import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

/**
 * Hook wrapper for cart context
 */
export default function useCart() {
  return useContext(CartContext);
}
