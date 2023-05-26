import { Filters } from "./Filters";

export function Header({changeFilters}) {
  return (
    <header>
      <h1>Cruzzy Shop</h1>
      <Filters />
    </header>
  );
}
