import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { name, img, description } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className=" h-56 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <Link to={""} className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
