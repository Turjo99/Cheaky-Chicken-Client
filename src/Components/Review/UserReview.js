import React, { useState } from "react";

const UserReview = ({ review, handleDelete, handleUpdateReview }) => {
  const { _id, itemID, price, userReview, userName, name } = review;
  const [updatedReview, setupdatedReview] = useState(userReview);

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
      <td className="flex justify-center items-center">
        <label
          htmlFor={`my-modal-${_id}`}
          className="bg-gray-400 text-black px-2 rounded-md active:scale-95 active:bg-blue-300"
        >
          Update
        </label>

        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id={`my-modal-${_id}`}
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit your review</h3>
            <input
              className="p-4 my-5 text-center w-full  border-b-2 bg-inherit"
              defaultValue={`${userReview}`}
              onChange={(e) => setupdatedReview(e.target.value)}
            ></input>
            <div className="modal-action">
              <label
                onClick={() => handleUpdateReview(_id, updatedReview)}
                htmlFor={`my-modal-${_id}`}
                className="btn"
              >
                Update
              </label>
            </div>
          </div>
        </div>
        {/* modal ends */}
      </td>
    </tr>
  );
};

export default UserReview;
