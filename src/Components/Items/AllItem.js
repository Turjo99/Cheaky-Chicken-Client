import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";
import ItemCard from "../Header/Home/ItemCard";

const AllItem = () => {
  useTitle("Menu");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-sooty-two.vercel.app/allItems")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setItems(data);
      });
  }, []);
  console.log(items);
  return (
    <div className="container mx-auto">
      {loading && (
        <div class="flex justify-center items-center">
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <h1 className=" text-5xl font-bold text-center space-x-4 my-8">
        Showing All Items
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
