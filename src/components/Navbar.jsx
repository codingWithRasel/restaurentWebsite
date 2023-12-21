import React from "react";
import logo from "../assets/image/logo.png";
import search_logo from "../assets/image/search.png";
import cart_logo from "../assets/image/cart_logo.png";
import hamburg_logo from "../assets/image/hamburg_logo.png";
const Navbar = () => {
  return (
    <header className=" bg-dark_1 shadow ">
      <div className=" container mx-auto px-3 flex justify-between items-center h-14">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex rounded-full border-orange_primary px-1 w-32 items-center  border-2">
          <input
            className=" w-full text-xs bg-transparent outline-none text-white p-1"
            type="text"
            name="search"
            id="search"
          />
          <span>
            <img className=" w-5" src={search_logo} alt="logo" />
          </span>
        </div>
        <div className=" flex gap-2">
          <span>
            <img src={cart_logo} />
          </span>
          <span>
            <img src={hamburg_logo} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
