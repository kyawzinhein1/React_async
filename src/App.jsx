import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("No Product found, Come Back Soon...");
      }

      const products = await response.json();
      setProducts(products);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="title">MY FASHION SHOP</div>

      <section className="ctr">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      {isLoading && <h3 className="loading">Loading Products ...</h3>}
      {isError && <h3 className="loading">{isError}</h3>}
    </>
  );
};

export default App;
