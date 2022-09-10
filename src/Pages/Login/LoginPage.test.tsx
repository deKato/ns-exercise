import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import React from "react"
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
  } from "react-router-dom";
import AuthContext from "../../store/auth/AuthContext"
import LoginPage from "./LoginPage"

describe('Login page component', () => {
    it('should render if not logged in', () => {
        render(<AuthContext.Provider value={{ isLoggedIn: false }}>
            <LoginPage/>
        </AuthContext.Provider>)
        expect(screen.getAllByText('Login')).toHaveLength(2);
    })

    it('should redirect if already logged id', () => {
        render(
            <AuthContext.Provider value={{ isLoggedIn: true }}>
            <Router basename="/">
            <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/server-list" element={<div>this is server list</div>} />
            </Routes>
          </Router>
          </AuthContext.Provider>
        )
        expect(screen.getByText('this is server list')).toBeInTheDocument();
    })
})
