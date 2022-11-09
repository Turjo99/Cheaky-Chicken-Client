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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
              </li>
              <Link to={"/allItems"}>
                <li>Menu</li>
              </Link>
              <Link to={"/login"}>
                <li>Login</li>
              </Link>

              <Link to={"/signup"}>
                <li>Signup</li>
              </Link>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-5xl">
            Cheaky Chicken
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <Link to={"/allItems"}>
                <li>Menu</li>
              </Link>
            </li>
            {user?.uid ? (
              <>
                <li tabIndex={0}>
                  <Link to={"/myreviews"}>
                    <li>My Reviews</li>
                  </Link>
                </li>
                <li tabIndex={0} onClick={handleLogOut}>
                  <Link to={"/allItems"}>
                    <li>Logout</li>
                  </Link>
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
          </ul>
        </div>
        <div className="navbar-end">{user?.uid && <>{user.displayName}</>}</div>
      </div>
    </div>
  );
};

export default NavBar;
