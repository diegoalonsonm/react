import { useState, useId } from "react";
import "./Filters.css";
import { useFilters } from '../hooks/useFilters.jsx'

export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Minimum Price:</label>
        <input
          type="range"
          min="0"
          max="1749"
          id={minPriceFilterId}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category:</label>
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
