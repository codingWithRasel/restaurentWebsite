import React from "react";
import { useMenuContext } from "../context/MenuContext";
import Item from "./Item";

const Product = () => {
  const { datas } = useMenuContext();

  return (
    <div className=" container mx-auto px-3 md:px-6">
      <div className="space-y-8 py-12 md:space-y-12 md:py-16">
        <div
          className=" space-y-8 text-center md:space-y-12
        "
        >
          {" "}
          <h3 className=" text-lg md:text-[40px]">Discover</h3>
          <h2 className=" text-2xl md:text-[42px]">Our Specialist Cuisine</h2>
        </div>
        <div className="flex flex-wrap justify-around gap-5">
          {datas.map((data) => {
            if (data.category === "popular") {
              return <Item key={data.id} data={data} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
