import React from "react";

const SectionHeader = ({ h3, h2 }) => {
  return (
    <div
      className=" space-y-8  text-center md:space-y-12 md:py-16
        "
    >
      {" "}
      <h3 className=" text-lg md:text-[40px]">{h3}</h3>
      <h2 className=" text-2xl md:text-[42px]">{h2}</h2>
    </div>
  );
};

export default SectionHeader;
