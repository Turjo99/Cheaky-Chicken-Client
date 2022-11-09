import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Context/UserContext";
import UserReview from "./UserReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReview(data);
      });
  }, [user?.email]);

  return (
    <div className="overflow-x-auto w-full">
      {console.log(userReview)}
      <table className="table w-full">
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
            <UserReview key={user._id} review={review}></UserReview>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
