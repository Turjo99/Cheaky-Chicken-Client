import React from "react";

const UserReview = ({ review, handleDelete }) => {
  const { _id, itemID, price, userReview, userName, name } = review;
  console.log(price, userReview, userName, name);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          {/* <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div> */}
          <div>
            <div className="font-bold">{userName}</div>
            {/* <div className="text-sm opacity-50">{phone}</div> */}
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{userReview}</td>
      <th>
        <button className="btn btn-ghost btn-xs"></button>
      </th>
    </tr>
  );
};

export default UserReview;
