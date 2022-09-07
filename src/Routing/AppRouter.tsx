import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../Pages/Login/Login";
import ServerList from "../Pages/ServerList/ServerListPage";
import Logout from "../Pages/Logout/Logout";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/server-list" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/server-list" element={<ServerList />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
