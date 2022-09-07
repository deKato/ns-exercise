import axios from "axios";
import React, { useState } from "react";
import { ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = (props: IAuthContextProviderProps) => {
  const [token, setToken] = useState<string>(sessionStorage.getItem("token"));
  const [loginError, setLoginError] = useState();
  const [isLoggedOut, setIsLoggedOut] = useState<boolean>(false);
  const isLoggedIn = !!token;

  const login = async (username: string, password: string) => {
    setLoginError(undefined);
    const data = {
      username,
      password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };
    const response: any = await axios
      .post("https://playground.tesonet.lt/v1/tokens", data, config)
      .catch((error) => {
        setLoginError(error);
      });
    sessionStorage.setItem("token", response.data.token);
    setToken(response.data.token);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken(undefined);
    setIsLoggedOut(true);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, isLoggedOut, loginError }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
