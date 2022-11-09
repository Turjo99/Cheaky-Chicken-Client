import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="container my-10 mx-auto bg-slate-700 p-5">
      <h1 className="text-center text-6xl mb-8">Our Menu</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
      <Link to={"/allItems"} className="card-actions justify-center my-8">
        <button className="btn btn-primary">See All</button>
      </Link>
    </div>
  );
};

export default Items;
