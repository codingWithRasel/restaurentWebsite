import React from "react";

const Banner = ({ h2, h3 }) => {
  return (
    <div className=" bg-banner flex flex-col items-center gap-y-1 bg-cover  bg-center py-10 md:gap-y-5 md:p-20">
      <h2 className=" text-2xl font-bold text-white md:text-5xl">{h2}</h2>
      <h3 className=" text-lg md:text-5xl">{h3}</h3>
    </div>
  );
};

export default Banner;
