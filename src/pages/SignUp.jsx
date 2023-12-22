import React from "react";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const SignUp = () => {
  return (
    <div className=" flex min-h-[90vh]  items-center justify-center">
      <div className="container mx-auto rounded-md border px-3  sm:max-w-[400px] sm:px-5">
        <div
          className=" flex flex-col gap-10
         py-5 "
        >
          <div className="text-lg">
            <h2 className=" text-3xl">Sign Up</h2>
            <p>Welcome Back</p>
          </div>
          <form>
            <div className=" flex flex-col gap-y-4">
              <div className="bg-input flex items-center space-x-4 rounded-2xl px-4">
                <IoPersonOutline className="text-xl" />
                <input
                  className="placeholder:font-popins w-full bg-transparent  py-4 pr-5 outline-none placeholder:text-sm"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="bg-input flex items-center space-x-4 rounded-2xl px-4">
                <TfiEmail className="  text-xl" />
                <input
                  className="placeholder:font-popins w-full bg-transparent  py-4 pr-5 outline-none placeholder:text-sm"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="bg-input flex items-center space-x-4 rounded-2xl px-4">
                <CiLock className=" text-xl " />
                <input
                  className="placeholder:font-popins w-full bg-transparent py-4 pr-5 outline-none placeholder:text-sm"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password "
                />
              </div>
              <div className="">
                <button
                  className=" rounded-full bg-orange_primary px-10 py-3 text-lg text-white"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
          <div className="space-y-2 text-lg ">
            <p>Continue With</p>
            <div className=" flex gap-3  text-xl">
              <a href="#">
                <FaFacebook className=" text-orange_primary" />
              </a>
              <a href="#">
                <FaGoogle className=" text-orange_primary" />
              </a>
              <a href="#">
                <FaInstagram className=" text-orange_primary" />
              </a>
            </div>
          </div>
          <div className=" self-end ">
            <p>
              Already have an account?{" "}
              <Link className=" text-lg text-orange_primary" to={"/Login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
