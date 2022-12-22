import React from "react";
import img1 from "../../../img/delivery.svg";
import img2 from "../../../img/hygene.svg";
import img3 from "../../../img/taste.svg";

const Features = () => {
  return (
    <div className="container my-10 mx-auto bg-slate-900 p-5">
      <h1 className="text-center text-6xl my-8">Our Features</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card">
          <div className="rounded-full">
            <img src={img1} alt="" className="rounded-full h-80 w-80" />
          </div>
          <h1 className="text-4xl text-center my-5">Fast Delivery</h1>
        </div>
        <div className="card">
          <div className="rounded-full">
            <img src={img2} alt="" className=" h-80 w-80" />
          </div>
          <h1 className="text-4xl text-center my-5">Hygenic on Top</h1>
        </div>
        <div className="card">
          <div className="rounded-full">
            <img src={img3} alt="" className="rounded-full h-80 w-80" />
          </div>
          <h1 className="text-4xl text-center my-5">
            Great Taste Great Quality
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
