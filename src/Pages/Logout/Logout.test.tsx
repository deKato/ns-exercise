import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthContext from "../../store/auth/AuthContext";
import Logout from "./Logout";

describe("Logout component", () => {
  it("should render logout component", async () => {
    const user = userEvent.setup();
    render(
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Logout />} />
            <Route path="/login" element={<div>Login page</div>} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    );
    expect(screen.getByText("You've been logged out")).toBeInTheDocument();
    await user.click(screen.getByText("Go to login"));
    expect(screen.getByText("Login page")).toBeInTheDocument();
  });
});
