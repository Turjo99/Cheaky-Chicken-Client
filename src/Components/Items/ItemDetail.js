import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ItemDetail = () => {
  const [review, setReview] = useState({});
  const item = useLoaderData();
  const { img, _id, description, name, price, rating } = item;
  console.log(item);
  const handleReview = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("user added successfully");
        }
      });
  };
  const handleBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review, _id };
    newReview[field] = value;
    setReview(newReview);
  };
  console.log(review);
  return (
    <div className="container mx-auto">
      <div className="">
        <img src={img} className="object-contain mx-auto lg:w-2/3" alt="" />
        <div className="text-center">
          <h1 className="text-6xl my-6">{name}</h1>
          <p>{description}</p>
          <div className="my-6 flex justify-around ">
            <div className="text-2xl">Price: ${price}</div>
            <div className="text-2xl">Rating {rating}</div>
          </div>
        </div>
      </div>
      <form onSubmit={handleReview} className="reviews">
        <h1 className="text-center text-6xl my-8">Add a Review</h1>
        <div className="flex justify-center">
          <div className="form-control mr-7">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                placeholder="Jhankar Mahbub"
                className="input input-bordered"
                name="name"
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Number</span>
            </label>
            <label className="input-group">
              <span>Phone</span>
              <input
                type="text"
                placeholder="12345678"
                className="input input-bordered"
                name="phone"
                onBlur={handleBlur}
              />
            </label>
          </div>
        </div>
        <div className="text-center my-8">
          <textarea
            className="textarea w-2/3 textarea-secondary"
            placeholder="your Review"
            name="review"
            onBlur={handleBlur}
          ></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ItemDetail;
