import React, { useState } from "react";
import Banner from "../components/Banner";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    message: "",
  });
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
    setContactInfo({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      message: "",
    });
  };
  return (
    <div className=" ">
      <Banner h2={"Contact Us"} h3={"Who We Are"} />
      <div className=" bg-shadeWhite py-10">
        <div className="container mx-auto  rounded-md border bg-white px-3 sm:max-w-[600px] sm:px-5">
          <form action="" onSubmit={handleSubmit}>
            <div className="relative py-14 ">
              <input
                className=" beautifulInput peer "
                type="text"
                name="firstname"
                placeholder=""
                id="firstName"
                value={contactInfo.firstname}
                onChange={handleChange}
              />{" "}
              <label
                className=" beautifulLabel pointer-events-none  absolute"
                htmlFor="firstName"
              >
                First Name
              </label>
            </div>
            <div className="relative py-14">
              <input
                className=" beautifulInput peer absolute w-full"
                type="text"
                name="lastname"
                placeholder=""
                id="lastname"
                value={contactInfo.lastname}
                onChange={handleChange}
              />{" "}
              <label
                className=" beautifulLabel pointer-events-none absolute"
                htmlFor="firstName"
              >
                Last Name
              </label>
            </div>
            <div className="relative py-14">
              <input
                className=" beautifulInput peer absolute w-full"
                type="email"
                name="email"
                placeholder=""
                id="email"
                value={contactInfo.email}
                onChange={handleChange}
              />{" "}
              <label
                className=" beautifulLabel pointer-events-none  absolute"
                htmlFor="firstName"
              >
                Email
              </label>
            </div>
            <div className="relative py-14">
              <input
                className=" beautifulInput  peer absolute m-0 w-full "
                type="number"
                name="number"
                placeholder=""
                id="number"
                value={contactInfo.number}
                onChange={handleChange}
              />{" "}
              <label
                className=" beautifulLabel pointer-events-none  absolute"
                htmlFor="firstName"
              >
                Phone Number
              </label>
            </div>
            <div className="relative space-y-5 py-14 ">
              <label
                className="pointer-events-none ml-2  font-bold text-shadeText"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="beautifulInput block  resize-none"
                name="message"
                placeholder="Write Your Message..."
                value={contactInfo.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div
              className=" flex justify-center py-14
            "
            >
              <input
                className=" w-[370px] rounded-lg bg-black py-5 text-lg text-white"
                type="submit"
                value="Send Message"
                id="message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
