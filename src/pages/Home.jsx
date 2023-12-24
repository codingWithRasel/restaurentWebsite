import React from "react";
import Hero from "../components/Hero";
import Cuisine from "../components/Cuisine";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className=" container mx-auto  px-3 md:px-6">
        <Cuisine />
        <Popular />
      </div>
    </div>
  );
};

export default Home;
