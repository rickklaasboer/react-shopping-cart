import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Loader from "../layout/Loader";

/**
 * List of products
 */
export default function ProductList() {
  const { data, error, loading } = useProducts();
  const { addToCart } = useCart();

  if (loading || error) return <Loader />;

  return (
    <div className="product-row">
      {data.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.title}</h3>
          <button onClick={() => addToCart(product.id)}>+ Cart</button>
        </div>
      ))}
    </div>
  );
}
