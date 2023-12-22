import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
const SignUp = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
  });
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value, id: uuidv4() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(user);
    setuser({ name: "", email: "", password: "" });
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
            <h2 className=" text-3xl">Sign Up</h2>
            <p>Welcome Back</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-y-4">
              <div className="bg-input flex items-center space-x-4 rounded-2xl px-4">
                <IoPersonOutline className="text-xl" />
                <input
                  className="placeholder:font-popins w-full bg-transparent  py-4 pr-5 outline-none placeholder:text-sm"
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>
              <div className="bg-input flex items-center space-x-4 rounded-2xl px-4">
                <TfiEmail className="  text-xl" />
                <input
                  className="placeholder:font-popins w-full bg-transparent  py-4 pr-5 outline-none placeholder:text-sm"
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>
              <div className="bg-input flex items-center space-x-4 rounded-2xl px-4">
                <CiLock className=" text-xl " />
                <input
                  className="placeholder:font-popins w-full bg-transparent py-4 pr-5 text-xl outline-none placeholder:text-sm"
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
