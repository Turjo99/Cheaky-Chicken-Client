import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <div
          className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-yellow-500
      "
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/login"} state={{ from: location }}></Navigate>
    </div>
  );
};

export default PrivateRoute;
