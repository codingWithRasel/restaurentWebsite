import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(user);
    setuser({ email: "", password: "" });
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex min-h-[90vh]  items-center justify-center">
      <div className="container mx-auto rounded-md border px-3  sm:max-w-[400px] sm:px-5">
        <div
          className=" flex flex-col gap-10
         py-5 "
        >
          <div className="text-lg">
            <h2 className=" text-3xl">Login</h2>
            <p>Welcome Back</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-y-4">
              <div className="flex items-center space-x-4 rounded-2xl bg-input p-4">
                <TfiEmail className="  text-xl" />
                <input
                  className="w-full bg-transparent  pr-5 outline-none placeholder:font-popins placeholder:text-sm"
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center space-x-4 rounded-2xl bg-input px-4">
                <CiLock className=" text-xl " />
                <input
                  className="w-full bg-transparent py-4 pr-5 text-xl outline-none placeholder:font-popins placeholder:text-sm"
                  type={isOpen ? "text" : "password"}
                  name="password"
                  id="password"
                  value={user.password}
                  placeholder="Password "
                  onChange={handleChange}
                />
                <div
                  className="cursor-pointer text-xl "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <IoEye className="text-orange_primary" />
                  ) : (
                    <IoMdEyeOff />
                  )}
                </div>
              </div>
              <div className="">
                <button
                  className=" rounded-full bg-orange_primary px-10 py-3 font-mont text-lg text-white"
                  type="submit"
                >
                  Login
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
              Don't have an accout?{" "}
              <Link className=" text-lg text-orange_primary" to={"/SignUp"}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
