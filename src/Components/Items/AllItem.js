import React, { useEffect, useState } from "react";
import ItemCard from "../Header/Home/ItemCard";

const AllItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allItems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="container mx-auto">
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
