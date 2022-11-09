import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const ItemDetail = () => {
  const { user } = useContext(AuthContext);

  // const [review, setReview] = useState({});
  const item = useLoaderData();
  const { img, _id, description, name, price } = item;
  console.log(item);
  const itemID = _id;

  const handleReview = (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const email = user?.email || "unregistered";
    const userReview = event.target.review.value;
    console.log(userName, userReview);
    const reviews = {
      itemID,
      email,
      name,
      price,
      userName,

      userReview,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Thanks for your review");
        }
      });
  };
  useEffect(() => {
    fetch(``);
  }, []);
  // const handleBlur = (event) => {
  //   const field = event.target.name;
  //   const value = event.target.value;
  //   const newReview = { ...review, _id, userID };
  //   newReview[field] = value;
  //   setReview(newReview);
  // };
  // console.log(reviews);
  return (
    <div className="container mx-auto">
      <div className="">
        <img src={img} className="object-contain mx-auto lg:w-2/3" alt="" />
        <div className="text-center">
          <h1 className="text-8xl my-6">{name}</h1>
          <p className="text-5xl">{description}</p>
          <div className="my-6 flex justify-around ">
            <div className="text-4xl">Price: ${price}</div>
            <div className="text-4xl">Rating {item?.rating}</div>
          </div>
        </div>
      </div>
      <form onSubmit={handleReview} className="reviews">
        <h1 className="text-center text-6xl my-8">Add a Review</h1>
        <div className="lg:flex justify-center text-4xl">
          <div className="form-control mr-7 ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group ">
              <span>Name</span>
              <input
                type="text"
                placeholder="Jhankar Mahbub"
                className="input input-bordered text-4xl"
                name="name"
                // onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="email"
                defaultValue={user?.email}
                className="input input-bordered text-4xl"
                name="email"
                // onBlur={handleBlur}
              />
            </label>
          </div>
        </div>
        <div className="text-center my-8">
          <textarea
            className="textarea w-full  textarea-secondary text-4xl"
            placeholder="your Review"
            name="review"
            // onBlur={handleBlur}
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
