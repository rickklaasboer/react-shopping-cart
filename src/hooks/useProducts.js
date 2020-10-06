import { useEffect, useState } from "react";

export default function useProducts() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    onMount();
  }, []);

  async function onMount() {
    try {
      const response = await fetch("/products.json");
      const json = await response.json();
      setData(json?.data?.products);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
  };
}
