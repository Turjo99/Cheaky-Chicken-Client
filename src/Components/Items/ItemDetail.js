import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";
import ItemReview from "./ItemReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = () => {
  const notify = () => toast("Thanks for your review!");
  const { user } = useContext(AuthContext);

  // const [review, setReview] = useState({});
  const item = useLoaderData();
  const { img, _id, description, name, price } = item;
  useTitle(`${name}`);
  console.log(item);
  const itemID = _id;
  const [review, setReview] = useState([]);
  const length = review.length;
  console.log(length);

  const handleReview = (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const email = user?.email || "unregistered";
    const userReview = event.target.review.value;
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    console.log(Date.parse);
    console.log(userName, userReview);
    const reviews = {
      itemID,
      email,
      name,
      price,
      userName,
      date: currentDate,
      userReview,
    };
    fetch("https://server-sooty-two.vercel.app/reviews", {
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
          notify();
        }
      });
  };
  useEffect(() => {
    fetch(`https://server-sooty-two.vercel.app/reviews?itemID=${itemID}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
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
          <h1 className="lg:text-6xl my-6 text-3xl">{name}</h1>
          <p className="text-5xl w=full">{description}</p>
          <div className="my-6 flex justify-around ">
            <div className="text-4xl">Price: ${price}</div>
            <div className="text-4xl">Rating {item?.rating}</div>
          </div>
        </div>
      </div>

      {user?.uid ? (
        <>
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
                    required
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
                    required
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
                required
                // onBlur={handleBlur}
              ></textarea>
            </div>

            <div className="text-center">
              <button className="btn btn-primary">Submit</button>
              <div>
                <ToastContainer />
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 className="text-center  text-3xl my-10">
            Please{" "}
            <Link className=" hover:text-white" to={"/login"}>
              Login
            </Link>{" "}
            to Post Your review
          </h1>
        </>
      )}

      <h1 className="lg:text-6xl text-3xl text-center my-5">Reviews</h1>
      {review.length ? (
        <>
          <div className="overflow-x-auto w-full">
            {console.log(review)}
            <table className="table w-full text-5xl">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Item Name</th>
                  <th>Review</th>

                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {review.map((singlereview) => (
                  <ItemReview
                    key={singlereview._id}
                    review={singlereview}
                  ></ItemReview>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-5xl text-center text-slate-200">
            No Reviews Yet
          </h1>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
