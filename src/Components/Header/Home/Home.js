import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Hero from "./Hero";

import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      {/* <div className="container mx-auto">
      <div className="">
        <img src={img} className="object-contain mx-auto w-2/3" alt="" />
        <div className="text-center">
          <h1 className="text-6xl my-6">{name}</h1>
          <p>{description}</p>
          <div className="my-6 flex justify-around">
            <div>Price: ${price}</div>
            <div>Rating {rating}</div>
          </div>
        </div>
      </div>
    </div> */}
      <Items></Items>

      {/* Items */}
    </div>
  );
};

export default Home;
