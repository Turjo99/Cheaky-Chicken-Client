import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";

import UserReview from "./UserReview";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReview(data);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = userReview.filter((rvw) => rvw._id !== id);
            setUserReview(remaining);
          }
        });
    }
  };
  console.log(userReview);

  return (
    <div className="overflow-x-auto ">
      {console.log(userReview)}
      <table className="table lg:w-full text-5xl sm:w-auto ">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Item</th>
            <th>Review</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userReview.map((review) => (
            <UserReview
              key={user._id}
              review={review}
              handleDelete={handleDelete}
            ></UserReview>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
