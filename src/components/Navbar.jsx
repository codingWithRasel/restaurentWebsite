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
      <div className="container mx-auto p-3 flex justify-between items-center ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* with hamburg */}
        <div
          className={`top-0 w-9/12 md:hidden  bottom-0 p-10 ${
            toggle ? "hidden" : "block"
          } absolute bg-dark_1 left-0`}
        >
          <ul className=" flex flex-col  text-dark_7 gap-5 text-lg">
            <Link to={"/"}>Home</Link>
            <Link to={"/Menu"}>Menu</Link>
            <Link to={"/Reservation"}>Reservation</Link>
            <Link to={"/Service"}>Service</Link>
            <Link to={"/Contact"}>Contact</Link>
            <div className="flex sm:w-3/4 rounded-full   focus-within:ring-2 ring-orange_primary border-orange_shade_4 px-3  items-center justify-between  border">
              <form className=" w-full ">
                <input
                  className="py-2 px-1 w-full text-sm  bg-transparent outline-none text-white "
                  type="text"
                  name="search"
                  id="search"
                />
              </form>
              <span>
                <img className=" w-5" src={search_logo} alt="logo" />
              </span>
            </div>
            <Link
              className=" bg-orange_primary font-medium active:ring ring-orange-300 text-center py-3 rounded-full sm:w-3/4"
              to={"/Login"}
            >
              Login
            </Link>
          </ul>
        </div>
        {/* without hamburg */}
        <div className=" hidden md:block  ">
          <ul className=" items-center text-dark_7 flex gap-x-5  text-lg">
            <Link to={"/"}>Home</Link>
            <Link to={"/Menu"}>Menu</Link>
            <Link to={"/Reservation"}>Reservation</Link>
            <Link to={"/Service"}>Service</Link>
            <Link to={"/Contact"}>Contact</Link>
            <div className=" rounded-full  border-orange_primary px-3 hidden lg:inline-flex items-center justify-between  border-2">
              <form className=" w-full ">
                <input
                  className="py-2 px-2 w-full text-sm sm:text-base bg-transparent  outline-none text-white "
                  type="text"
                  name="search"
                  id="search"
                />
              </form>
              <span>
                <img className=" w-5" src={search_logo} alt="logo" />
              </span>
            </div>
          </ul>
        </div>
        <div className=" flex text-dark_7  items-center gap-2">
          <span>
            <Link to={"/cart"} className="flex">
              <img src={cart_logo} />
              <span className="w-4 -ml-2 -mt-2 text-xs h-4 text-orange_primary font-bold bg-white flex justify-center items-center rounded-full">
                {2}
              </span>
            </Link>
          </span>

          <span>
            <Link
              className=" hidden text-lg font-medium md:block bg-orange_primary active:ring ring-orange-300 text-center px-10 py-2 md:py-3  rounded-full"
              to={"/Login"}
            >
              Login
            </Link>
          </span>
          {/* hamburg section  */}
          <span>
            <button
              className=" block  md:hidden"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <img src={hamburg_logo} />
              ) : (
                <img src={close_hamburg} />
              )}
            </button>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
