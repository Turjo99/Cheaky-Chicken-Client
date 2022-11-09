import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ItemCard = ({ item }) => {
  const { _id, name, img, description } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <div className="foo">
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </div>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl">{name}</h2>
          <p className="card-title text-3xl">{description}</p>
          <Link to={`/allItems/${_id}`} className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
