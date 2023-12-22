import React from "react";
import hero_slide_1 from "../assets/image/hero_slide1.png";

const Hero = () => {
  return (
    <div className=" bg-heroBg min-h-[94vh] bg-cover bg-center text-white">
      <div className=" container mx-auto px-3 py-16 sm:px-10 md:py-40">
        <div className=" space-y-3 md:space-y-0">
          <div className=" flex flex-col items-center gap-y-3 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-3 md:flex-1   md:items-start md:gap-10">
              <h3 className=" text-lg md:text-[40px]">Welcome To Foodi</h3>
              <h1
                className=" px-14 text-center text-2xl font-bold md:px-0
               md:text-left md:text-[50px] md:leading-tight"
              >
                We Deliver The Test Of Life
              </h1>
              <p className=" text-center text-sm text-dark_5 md:text-left md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              {/* fordesktop */}
              <div className="hidden justify-start  gap-x-10 md:flex">
                <button className=" whitespace-nowrap rounded-full bg-orange_primary px-6 py-3">
                  ORDER NOW
                </button>
                <button className="whitespace-nowrap rounded-full border-2 border-orange_primary px-6 py-3">
                  Book A Table
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img className="md:ml-20" src={hero_slide_1} alt="hero_image" />
            </div>
          </div>
          {/* formobile */}
          <div className=" flex justify-around md:hidden">
            <button className=" whitespace-nowrap rounded-full bg-orange_primary px-6 py-3">
              ORDER NOW
            </button>
            <button className="whitespace-nowrap rounded-full border-2 border-orange_primary px-6 py-3">
              Book A Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
