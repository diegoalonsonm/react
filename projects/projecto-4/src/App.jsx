import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { products as initialProducts } from "./mocks/products.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFitlers] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFitlers} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
