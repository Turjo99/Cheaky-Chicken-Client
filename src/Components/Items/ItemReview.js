import React from "react";

const ItemReview = ({ review }) => {
  const { name, price, userReview, userName } = review;
  console.log(review);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{userName}</div>
            {/* <div className="text-sm opacity-50">{phone}</div> */}
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm text-3xl">${price}</span>
      </td>
      <td>{userReview}</td>
      <th>
        <button className="btn btn-ghost btn-xs"></button>
      </th>
    </tr>
  );
};

export default ItemReview;
