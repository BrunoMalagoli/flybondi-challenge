import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import DataContext from "./DataContext";
import { useState } from "react";

const DataContextProvider = ({ children }: { children: ReactJSXElement }) => {
  const [data, setData] = useState();
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
