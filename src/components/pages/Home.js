import React from "react";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader";
import useProducts from "../../hooks/useProducts";
import ProductList from "../product/ProductList";

/**
 * Home page
 */
export default function Home() {
  const { data, error, loading } = useProducts();

  if (loading || error) return <Loader />;

  return (
    <div>
      <h1>Home</h1>
      <Link to="/cart">Cart</Link>
      <hr />
      <ProductList products={data} />
    </div>
  );
}
