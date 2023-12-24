import React from "react";
import logo from "../assets/image/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import rightArrow from "../assets/image/rightArrow.png";
const Footer = () => {
  return (
    <footer className=" bg-dark_1 py-5 text-dark_5">
      <div
        className="container mx-auto grid  gap-10  px-3
       py-10 sm:grid-cols-2 md:px-6 lg:grid-cols-4"
      >
        <div className=" space-y-3">
          <img src={logo} alt="" />
          <span className=" inline-block ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            possimus.
          </span>
          <ul className="  flex gap-x-2 text-xl text-orange_primary">
            <FaInstagram />
            <FaGoogle />
            <FaFacebook />
          </ul>
        </div>
        <ul className=" space-y-3 ">
          <h4 className="mb-3 text-lg font-bold text-white">Contact Us</h4>
          <address>
            567 Country Street Ave <br /> RK 7899,London,UK <br />{" "}
            +0044843462372992
          </address>
          <span className=" inline-flex rounded-md bg-white p-1 text-dark_1">
            <input
              className=" px-2 outline-none lg:w-44"
              type="text"
              name="search"
            />
            <img className="inline" src={rightArrow} />
          </span>
        </ul>
        <ul className=" space-y-1">
          <h4 className=" mb-3 text-lg font-bold text-white">User Link</h4>
          <li className=" cursor-pointer">About Us</li>
          <li className=" cursor-pointer">Contact Us</li>
          <li className=" cursor-pointer">Order Delivery</li>
          <li className=" cursor-pointer">Payment & Tax</li>
          <li className=" cursor-pointer">Terms & Condition</li>
        </ul>
        <ul className=" space-y-1">
          <h4 className="mb-3 text-lg font-bold text-white">
            Opening Restaurent
          </h4>
          <p>
            Sa-We : 09:00am-10:00pm <br />
            Thursday : 09:00am-05:00pm <br />
            Friday : Closed
          </p>
        </ul>
      </div>
      <div
        className=" flex h-[2px] items-center
        justify-center bg-dark_4"
      >
        <span className="  h-5 w-5 rounded-full bg-orange_primary "></span>
      </div>
      <p className="my-3 text-center">
        Copyright 2022@Foodi, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
