import React, { useState } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { useMenuContext } from "../context/MenuContext";
import Item from "../components/Item";

const menu = ["All", "Breakfast", "Lunch", "Dinner", "Desert"];
const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState("All");
  const { datas } = useMenuContext();
  const [number, setNumber] = useState(4);
  return (
    <div>
      <Banner h2={"Our Menu"} h3={"Fresh  &  Delicios"} />
      <div className=" container mx-auto px-3 md:px-6 ">
        <div className=" py-5  md:py-10">
          <ul className="flex justify-center gap-10  text-sm md:text-2xl">
            {menu.map((m, i) => (
              <Link
                className={
                  currentMenu === m ? "font-bold text-orange_primary" : ""
                }
                onClick={() => setCurrentMenu(m)}
                key={i}
              >
                {m}
              </Link>
            ))}
          </ul>
        </div>
        <div className="space-y-8 py-12 md:space-y-12 md:py-16">
          <div
            className=" space-y-8 text-center md:space-y-12
        "
          >
            {" "}
            <h2 className=" text-2xl text-orange_primary md:text-[42px]">
              {currentMenu}
            </h2>
          </div>
          <div className="flex flex-wrap justify-around gap-5">
            {currentMenu === "All"
              ? datas.slice(0, number).map((m, i) => <Item key={i} data={m} />)
              : datas
                  .filter((f) => f.category === currentMenu)
                  .slice(0, number)
                  .map((m, i) => <Item key={i} data={m} />)}
          </div>
          <div className="flex justify-center">
            <button
              className=" rounded-full bg-orange_primary px-6 py-3 font-mont text-xs font-medium text-white md:text-lg"
              onClick={() => setNumber((prev) => prev + 4)}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
