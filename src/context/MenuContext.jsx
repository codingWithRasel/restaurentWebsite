import React, { createContext, useContext, useState } from "react";
import all_data from "../assets/data";
// Step 1: Create a React context
const MenuContext = createContext();


// Step 2: Create a provider component (optional)
export const MenuContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(all_data);
  const [cartArray, setCartArray] = useState([]);
  const handleChange = (item, d) => {
    let ind = -1;
    cartArray.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cartArray;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCartArray([...tempArr]);
  };
  const addCart = (item) => {
    const AlreadyExist = cartArray.map((cart) => cart.id).includes(item.id);
    if (!AlreadyExist) {
      setCartArray((prev) => [...prev, item]);
    }
  };
  return (
    <MenuContext.Provider
      value={{
        datas,
        setDatas,
        cartArray,
        setCartArray,
        handleChange,
        addCart,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// Step 3: Create the custom useContext hook
export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }
  return context;
};
