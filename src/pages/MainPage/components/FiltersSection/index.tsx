import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { DataTypes } from "../types";
import IntegrantsFilter from "./components/IntegrantsFilter";
import PriceFilter from "./components/PriceFilter";

const FlitersSection = ({ props }: { props: DataTypes }) => {
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  useEffect(() => {
    //Keeps maximum price updated, if data could update filters would always get updated price
    let priceArray = props.map((obj) => {
      return obj.price;
    });
    setMaxPrice(Math.max(...priceArray));
  }, [maxPrice]);
  return (
    <>
      <Stack
        height={"25vh"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#FEBE10"}
      >
        <Box
          borderRadius={"5px"}
          height={"80%"}
          width={"80%"}
          bgcolor={"#FAFAFA"}
        >
          <Stack
            flexDirection={"row"}
            paddingX={"10px"}
            height={"100%"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Box width={{ xs: "18%", md: "12%" }}>
              <IntegrantsFilter />
            </Box>
            <Box width={{ xs: "18%", md: "12%" }}>
              <PriceFilter maxPrice={maxPrice} />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default FlitersSection;
