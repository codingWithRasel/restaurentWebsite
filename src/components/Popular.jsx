import React from "react";
import { useMenuContext } from "../context/MenuContext";
import Item from "./Item";
import SectionHeader from "./SectionHeader";

const Popular = () => {
  const { datas } = useMenuContext();

  return (
    <div className="space-y-8 py-12 md:space-y-12 md:py-16">
      {" "}
      <SectionHeader h3={"Product"} h2={"Most Popular Item"} />
      <div className="flex flex-wrap justify-around gap-5">
        {datas.map((data) => {
          if (data.category === "popular") {
            return <Item key={data.id} data={data} />;
          }
        })}
      </div>
    </div>
  );
};

export default Popular;
