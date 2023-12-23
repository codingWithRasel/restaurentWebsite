import React from "react";
import icon1 from "../assets/image/cuisine/icon_1.png";
import icon2 from "../assets/image/cuisine/icon_2.png";
import icon3 from "../assets/image/cuisine/icon_3.png";
import icon4 from "../assets/image/cuisine/icon_4.png";
const cuisine = [
  {
    icon: icon1,
    title: "Middle-East Food",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    icon: icon2,
    title: "Korean Food",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    icon: icon3,
    title: "Western Food",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    icon: icon4,
    title: "Chinese Food",
  },
];
const Cuisine = () => {
  return (
    <div className=" container mx-auto  px-3 md:px-6">
      <div className="space-y-5 py-10 md:space-y-7">
        <div
          className=" space-y-5 text-center md:space-y-7
        "
        >
          {" "}
          <h3 className=" text-lg md:text-[40px]">Discover</h3>
          <h2 className=" text-2xl md:text-[42px]">Our Specialist Cuisine</h2>
        </div>
        <div className=" grid grid-cols-2 gap-2 sm:gap-5 lg:gap-10 xl:gap-x-20">
          {cuisine.map((item) => (
            <div className="flex items-center space-x-2 rounded-full bg-dark_1 p-3 sm:space-x-5  md:p-5 lg:p-10">
              <div className="">
                <img src={item.icon} alt="icon" />
              </div>
              <div className=" sm:flex-1">
                <h4 className=" whitespace-nowrap text-sm text-orange_primary md:text-2xl">
                  {item.title}
                </h4>
                <p className=" text-[8px] text-dark_5 sm:text-sm lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing{" "}
                  <p className=" hidden md:inline">
                    {" "}
                    and typesetting industry. Lorem Ipsum has been the
                    industry's
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
