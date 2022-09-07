import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../Common/Button/Button";
import { Card } from "../../Common/Card/Card";
import {
  StyledLogoutBackground,
  StyledLogoutCardContainer,
  StyledLogoutHeader,
} from "./Logout.styled";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <StyledLogoutBackground>
      <StyledLogoutCardContainer>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StyledLogoutHeader>You've been logged out</StyledLogoutHeader>
            <Button onClick={() => navigate("/login")}>Go to login</Button>
          </div>
        </Card>
      </StyledLogoutCardContainer>
    </StyledLogoutBackground>
  );
};

export default Logout;
