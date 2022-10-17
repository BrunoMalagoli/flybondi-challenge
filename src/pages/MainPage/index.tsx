import React from "react";
import NavBar from "./components/NavBar";
import FlitersSection from "./components/FiltersSection/index";
import dataset from "../../../dataset.json";
import { DataTypes } from "./components/types";
const MainPage = () => {
  const flyData: DataTypes = dataset;
  return (
    <>
      <NavBar />
      <FlitersSection props={flyData} />
    </>
  );
};

export default MainPage;
