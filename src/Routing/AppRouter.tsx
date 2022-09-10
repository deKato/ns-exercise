import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import Logout from "../Pages/Logout/Logout";
import PrivateRoute from "./PrivateRoute";
import ServerListPage from "../Pages/ServerList/ServerListPage";

export const AppRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/server-list" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/server-list" element={<ServerListPage />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
