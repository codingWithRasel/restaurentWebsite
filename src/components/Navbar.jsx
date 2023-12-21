import React, { useState } from "react";
import logo from "../assets/image/logo.png";
import search_logo from "../assets/image/search.png";
import cart_logo from "../assets/image/cart_logo.png";
import hamburg_logo from "../assets/image/hamburg_logo.png";
import close_hamburg from "../assets/image/close_hamburg.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header className=" bg-dark_1 shadow">
      <div className="container mx-auto px-3 flex justify-between items-center h-14">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex rounded-full border-orange_primary px-1 w-36 items-center  border-2">
          <form>
            <input
              className=" w-full text-xs bg-transparent outline-none text-white p-1"
              type="text"
              name="search"
              id="search"
            />
          </form>
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
          <button onClick={() => console.log(setToggle(!toggle))}>
            {toggle ? <img src={hamburg_logo} /> : <img src={close_hamburg} />}
          </button>
        </div>
      </div>
      <div
        className={`top-0 text-dark_7 w-9/12  bottom-0 p-10 ${
          toggle ? "hidden" : "block"
        } absolute bg-dark_1 left-0`}
      >
        <ul className=" flex flex-col gap-5 text-lg">
          <Link to={"/"}>Home</Link>
          <Link to={"/Menu"}>Menu</Link>
          <Link to={"/Reservation"}>Reservation</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
          <Link
            className=" bg-orange_primary active:ring ring-orange-300 text-center py-3 rounded-full font-bold"
            to={"/Login"}
          >
            Login
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
