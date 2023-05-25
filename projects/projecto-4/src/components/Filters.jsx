import { useState, useId } from "react";
import "./Filters.css";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Minimum Price</label>
        <input
          type="range"
          min="0"
          max="1749"
          id={minPriceFilterId}
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">all</option>
          <option value="home-decoration">home-decoration</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">smartphones</option>
          <option value="fragrances">fragrances</option>
          <option value="skincare">skincare</option>
          <option value="groceries">groceries</option>
        </select>
      </div>
    </section>
  );
}
