import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";

import UserReview from "./UserReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReviews = () => {
  const notify = () => toast("Review Deleted!");
  useTitle("My Reviews");
  const { user, logout } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    fetch(`https://server-sooty-two.vercel.app/user?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("chicken-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        setUserReview(data);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://server-sooty-two.vercel.app/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            notify();
            const remaining = userReview.filter((rvw) => rvw._id !== id);
            setUserReview(remaining);
          }
        });
    }
  };
  const handleUpdateReview = (id, updatedReview) => {
    fetch(`https://server-sooty-two.vercel.app/user/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedReview: updatedReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remainingReviews = userReview.filter((rvw) => rvw._id !== id);
          const reviewToUpdate = userReview.find((rvw) => rvw._id === id);
          reviewToUpdate.userReview = updatedReview;
          const newUserReviews = [reviewToUpdate, ...remainingReviews];
          setUserReview(newUserReviews);
        }
        console.log(data);
      });
  };

  console.log(userReview);

  return (
    <div className="overflow-x-auto ">
      <ToastContainer />
      {console.log(userReview)}
      <table className="table lg:w-full text-5xl sm:w-auto ">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Item</th>
            <th>Review</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {userReview.map((review) => (
            <UserReview
              key={user._id}
              review={review}
              handleDelete={handleDelete}
              handleUpdateReview={handleUpdateReview}
            ></UserReview>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
