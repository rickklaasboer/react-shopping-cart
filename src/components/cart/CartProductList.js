import React from "react";
import useCart from "../../hooks/useCart";

export default function CartProductList() {
  const { products, removeFromCart } = useCart();

  if (!products?.length) return <p>No products in cart</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>amount</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={Math.random()}>
            <td>{product.id}</td>
            <td>{product.amount}</td>
            <td>
              <button onClick={() => removeFromCart(product.id)}>
                verwijderen
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
