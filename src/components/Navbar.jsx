import React from "react";
import logo from "../assets/image/logo.png";
import search_logo from "../assets/image/search.png";
import cart_logo from "../assets/image/cart_logo.png";
import hamburg_logo from "../assets/image/hamburg_logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className=" bg-dark_1 shadow ">
      <div className=" container mx-auto px-3 flex justify-between items-center h-14">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex rounded-full border-orange_primary px-1 w-36 items-center  border-2">
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
        <div className=" flex  gap-2">
          <Link to={"/cart"} className="flex">
            <img src={cart_logo} />
            <span className="w-4 -ml-2 -mt-2 text-xs h-4 text-orange_primary font-bold bg-white flex justify-center items-center rounded-full">
              {2}
            </span>
          </Link>
          <button onClick={() => console.log("buttton clicked")}>
            <img src={hamburg_logo} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
