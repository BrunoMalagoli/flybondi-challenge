import { Slider } from "@mui/material";

const PriceFilter = () => {
  return (
    <Slider defaultValue={0} aria-label="Rango de precio" min={0} max={1000} />
  );
};

export default PriceFilter;
