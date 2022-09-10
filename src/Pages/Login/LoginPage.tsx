import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Card } from "../../Common/Card/Card";
import LoginForm from "../../Login/LoginForm/LoginForm";
import AuthContext from "../../store/auth/AuthContext";
import {
  StyledLoginBackground,
  StyledLoginCardContainer,
  StyledLoginHeader,
} from "./LoginPage.styled";

const LoginPage = () => {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    return <Navigate to="/server-list" />;
  }
  return (
    <StyledLoginBackground>
      <StyledLoginCardContainer>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StyledLoginHeader>Login</StyledLoginHeader>
            <LoginForm />
          </div>
        </Card>
      </StyledLoginCardContainer>
    </StyledLoginBackground>
  );
};

export default LoginPage;
