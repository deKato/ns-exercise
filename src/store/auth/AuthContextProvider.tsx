import axios from "axios";
import React, { ReactNode, useState } from "react";
import AuthContext from "./AuthContext";

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = (props: IAuthContextProviderProps) => {
  const [token, setToken] = useState<string>(sessionStorage.getItem("token"));
  const [loginError, setLoginError] = useState();
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
    await axios
      .post("https://playground.tesonet.lt/v1/tokens", data, config)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        setToken(res.data.token);
      })
      .catch((error) => {
        setLoginError(error);
      });

  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, loginError }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
