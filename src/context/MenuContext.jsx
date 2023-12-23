import React, { createContext, useContext, useState } from "react";
import all_data from "../assets/data";
// Step 1: Create a React context
const MenuContext = createContext();

// Step 2: Create a provider component (optional)
export const MenuContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(all_data);

  return <MenuContext.Provider value={{datas}}>{children}</MenuContext.Provider>;
};

// Step 3: Create the custom useContext hook
export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }
  return context;
};
