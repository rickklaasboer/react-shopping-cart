import React from "react";
import useCart from "../../hooks/useCart";
import Loader from "../layout/Loader";

/**
 * List of products
 */
export default function ProductList(props) {
  const { products } = props;
  const { addToCart } = useCart();

  if (!products) return <Loader />;

  return (
    <div className="product-row">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.title}</h3>
          <button onClick={() => addToCart(product.id)}>+ Cart</button>
        </div>
      ))}
    </div>
  );
}
