import { Navigate, Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../store/auth/AuthContext";

const PrivateRoute = () => {
  const location = useLocation();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
