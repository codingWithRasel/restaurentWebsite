import React from "react";
import img from "../assets/image/item/wing1.png";
import rating from "../assets/image/item/rating_star.png";
const Item = ({ data }) => {
  return (
    <div>
      <div className="w-[165px] rounded-full border bg-dark_1 md:w-52 xl:w-60 2xl:w-72">
        <div>
          <img src={data.image} alt="image" />
        </div>
        <div className=" flex flex-col items-center gap-y-1 p-3 pb-10">
          <h4 className=" text-center text-sm text-white md:text-xl">
            {data.menuName}
          </h4>
          <p className=" text-xl text-orange_primary md:text-2xl">
            ${data.price}
          </p>
          <div>
            <img className="mr-1 inline w-16" src={rating} />
            <span className="text-3xs text-orange_primary md:text-lg">(5)</span>
          </div>
          <div>
            <button className=" rounded-full bg-orange_primary px-6 py-3 font-mont text-xs font-medium text-white md:text-lg">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
