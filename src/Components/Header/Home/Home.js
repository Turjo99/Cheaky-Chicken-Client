import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Hero from "./Hero";

import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Items></Items>

      {/* Items */}
    </div>
  );
};

export default Home;
