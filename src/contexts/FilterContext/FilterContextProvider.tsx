import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";
import FilterContext from "./FilterContext";
const FilterContextProvider = ({ children }: { children: ReactJSXElement }) => {
  const [priceFilter, setPriceFilter] = useState();

  return (
    <FilterContext.Provider value={{ priceFilter, setPriceFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
