import { Navigate, Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../store/auth/AuthContext";

const PrivateRoute = () => {
  const location = useLocation();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const navigateAway = () => {
    if (authCtx.isLoggedOut) {
      return <Navigate to={"/logout"} state={{ from: location }} replace />;
    } else {
      return <Navigate to={"/login"} state={{ from: location }} replace />;
    }
  };

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return navigateAway();
  }
};

export default PrivateRoute;
