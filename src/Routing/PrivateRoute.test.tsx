import { render, screen } from "@testing-library/react";
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthContext from "../store/auth/AuthContext";
import PrivateRoute from "./PrivateRoute";

describe("Private route component", () => {
  it("should navigate to outlet if logged in", () => {
    render(
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/protected" />} />
            <Route path="/login" element={<div>Login page</div>} />
            <Route element={<PrivateRoute />}>
              <Route path="/protected" element={<div>Protected route</div>} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Protected route")).toBeInTheDocument();
  });
});
