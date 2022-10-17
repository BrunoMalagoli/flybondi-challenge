import { Slider } from "@mui/material";
import { useContext, useState } from "react";
import FilterContext from "../../../../../contexts/FilterContext/FilterContext";

const PriceFilter = ({ maxPrice }: { maxPrice: number | undefined }) => {
  const { priceFilter, setPriceFilter } = useContext(FilterContext);
  function handleChange(e: Event) {
    let value = (e.target as HTMLInputElement).value;
    setPriceFilter(value);
  }
  return (
    <Slider
      defaultValue={maxPrice}
      aria-label="Rango de precio"
      min={0}
      onChange={handleChange}
      max={maxPrice}
    />
  );
};

export default PriceFilter;
