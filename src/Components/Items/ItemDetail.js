import React from "react";
import { useLoaderData } from "react-router-dom";

const ItemDetail = () => {
  const item = useLoaderData();
  const { img, _id, description, name, price, rating } = item;
  console.log(item);
  return (
    <div className="container">
      <div className="">
        <img src={img} className="" alt="" />
      </div>
    </div>
  );
};

export default ItemDetail;
