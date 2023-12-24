import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import search_logo from "../assets/image/search.png";
import cart_logo from "../assets/image/cart_logo.png";
import hamburg_logo from "../assets/image/hamburg_logo.png";
import close_hamburg from "../assets/image/close_hamburg.png";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = toggle ? "auto" : "hidden";
    }
  }, [toggle]);
  return (
    <header className=" bg-dark_1 shadow">
      <div className="container mx-auto flex items-center justify-between p-3 md:px-6 ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* for mobile */}
        <div
          className={`bottom-0 top-0 z-50 w-9/12 p-10 duration-300 ease-in md:hidden ${
            toggle ? " -translate-x-full" : " translate-x-0"
          } absolute left-0 bg-dark_1`}
        >
          <ul className=" flex flex-col  gap-5 text-lg text-dark_7">
            <NavLink onClick={() => setToggle(!toggle)} to={"/"}>
              Home
            </NavLink>
            <NavLink onClick={() => setToggle(!toggle)} to={"/Menu"}>
              Menu
            </NavLink>
            <NavLink onClick={() => setToggle(!toggle)} to={"/Reservation"}>
              Reservation
            </NavLink>
            <NavLink onClick={() => setToggle(!toggle)} to={"/Service"}>
              Service
            </NavLink>
            <NavLink onClick={() => setToggle(!toggle)} to={"/Contact"}>
              Contact
            </NavLink>
            <div className="flex items-center justify-between rounded-full border border-orange_shade_4 px-3  ring-orange_primary focus-within:ring-2  sm:w-3/5">
              <form className=" w-full ">
                <input
                  className="w-full bg-transparent px-1 py-2  text-sm text-white outline-none "
                  type="text"
                  name="search"
                />
              </form>
              <span>
                <img className=" w-5" src={search_logo} alt="logo" />
              </span>
            </div>
            <Link
              onClick={() => setToggle(!toggle)}
              className=" rounded-full bg-orange_primary py-3 text-center font-mont font-medium ring-orange-300 active:ring sm:w-3/5"
              to={"/Login"}
            >
              Login
            </Link>
          </ul>
        </div>
        {/*for desktop */}
        <div className=" hidden md:block  ">
          <ul className=" flex items-center gap-x-5 text-lg  text-dark_7">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/Menu"}>Menu</NavLink>
            <NavLink to={"/Reservation"}>Reservation</NavLink>
            <NavLink to={"/Service"}>Service</NavLink>
            <NavLink to={"/Contact"}>Contact</NavLink>
            <div className=" hidden  items-center justify-between rounded-full border-2 border-orange_primary px-3  lg:inline-flex">
              <form className=" w-full ">
                <input
                  className="w-full bg-transparent px-2 py-2 text-sm text-white  outline-none sm:text-base "
                  type="text"
                  name="search"
                />
              </form>
              <span>
                <img className=" w-5" src={search_logo} alt="logo" />
              </span>
            </div>
          </ul>
        </div>
        <div className=" flex items-center  gap-2 text-dark_7">
          <span>
            <Link to={"/cart"} className="flex">
              <img src={cart_logo} />
              <span className="-ml-2 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-bold text-orange_primary">
                {2}
              </span>
            </Link>
          </span>

          <span>
            <Link
              className=" hidden rounded-full bg-orange_primary px-10 py-2 text-center font-mont text-lg font-medium ring-orange-300 active:ring md:block  md:py-3"
              to={"/Login"}
            >
              Login
            </Link>
          </span>
          {/* hamburg section  */}
          <span className=" z-50">
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
      {/* for blur  */}
      {!toggle && (
        <div className="absolute inset-0 z-30 backdrop-blur-sm md:hidden"></div>
      )}
    </header>
  );
};

export default Navbar;
