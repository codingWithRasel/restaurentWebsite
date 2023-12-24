import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hero_slide_1 from "../assets/image/hero_slide1.png";
import img1 from "../assets/image/hero_slide1.png";
import img2 from "../assets/image/hero_slide2.png";
import img3 from "../assets/image/hero_slide3.png";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Button from "./Button";
const Hero = () => {
  return (
    <div className=" bg-heroBg bg-center text-white md:bg-right-top">
      <div className=" container mx-auto px-3 py-9 sm:px-10 md:pb-60 md:pt-20">
        <div className=" space-y-2 md:space-y-0">
          <div className=" flex flex-col items-center gap-y-3 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-3 md:max-w-[450px]   md:flex-1 md:items-start md:gap-10">
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
                <Button className={"uppercase"} Text={"Order Now"} />
                <Button
                  className={
                    "border-2 border-orange_primary bg-transparent capitalize"
                  }
                  Text={"Book A Table"}
                />
              </div>
            </div>
            <div className=" lg:justify-end">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                }}
                modules={[Autoplay]}
                className=" w-[300px] lg:w-[400px] xl:w-[600px] "
              >
                <SwiperSlide>
                  <img src={img1} className=" md:ml-10" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* formobile */}
          <div className=" flex justify-around md:hidden">
            <Button className={"uppercase"} Text={"Order Now"} />
            <Button
              className={
                "border-2 border-orange_primary bg-transparent capitalize"
              }
              Text={"Book A Table"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
