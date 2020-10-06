import React from "react";
import useCart from "../../hooks/useCart";

export default function CartProductList() {
  const { products, removeFromCart } = useCart();

  if (!products?.length) return <p>No products in card</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={Math.random()}>
            <td>{product}</td>
            <td>
              <button onClick={() => removeFromCart(product)}>
                verwijderen
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
