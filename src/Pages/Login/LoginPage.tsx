import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Card } from "../../Components/Common/Card/Card";
import LoginForm from "../../Components/LoginForm/LoginForm";
import AuthContext from "../../store/auth/AuthContext";
import {
  StyledCardContainer,
  StyledCardContentContainer,
  StyledLoginLogoutBackground,
} from "../CommonPage.styles";
import { StyledLoginHeader } from "./LoginPage.styled";

const LoginPage = () => {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    return <Navigate to="/server-list" />;
  }
  return (
    <StyledLoginLogoutBackground>
      <StyledCardContainer>
        <Card>
          <StyledCardContentContainer>
            <StyledLoginHeader>Login</StyledLoginHeader>
            <LoginForm />
          </StyledCardContentContainer>
        </Card>
      </StyledCardContainer>
    </StyledLoginLogoutBackground>
  );
};

export default LoginPage;
