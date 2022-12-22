import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        console.log("Sign Out successfully");
      })
      .catch((error) => console.error(error));
  };
  const menuItem = (
    <>
      <li tabIndex={0}>
        <Link to={"/allItems"}>
          <li>Menu</li>
        </Link>
      </li>
      <li tabIndex={0}>
        <Link to={"/blogs"}>
          <li>Blogs</li>
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li tabIndex={0}>
            <Link to={"/addItem"}>
              <li>Add a Item</li>
            </Link>
          </li>
          <li tabIndex={0}>
            <Link to={"/myreviews"}>
              <li>My Reviews</li>
            </Link>
          </li>
          <li tabIndex={0} onClick={handleLogOut}>
            <Link to={"/"}>
              <li>Logout</li>
            </Link>
          </li>
          <li tabIndex={0}>
            <Link>{user?.uid && <>{user.displayName}</>}</Link>
          </li>
        </>
      ) : (
        <>
          <li tabIndex={0}>
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
          </li>
          <li tabIndex={0}>
            <Link to={"/signup"}>
              <li>Signup</li>
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 text-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-2xl"
            >
              {menuItem}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-5xl">
            Cheaky Chicken
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
