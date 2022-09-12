import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Card } from "../../Common/Card/Card";
import LoginForm from "../../Login/LoginForm/LoginForm";
import AuthContext from "../../store/auth/AuthContext";
import {
  StyledLoginBackground,
  StyledLoginCardContainer,
  StyledLoginFormContainer,
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
          <StyledLoginFormContainer>
            <StyledLoginHeader>Login</StyledLoginHeader>
            <LoginForm />
          </StyledLoginFormContainer>
        </Card>
      </StyledLoginCardContainer>
    </StyledLoginBackground>
  );
};

export default LoginPage;
