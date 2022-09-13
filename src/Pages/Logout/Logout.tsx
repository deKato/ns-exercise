import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Common/Button/Button";
import { Card } from "../../Components/Common/Card/Card";
import {
  StyledCardContainer,
  StyledCardContentContainer,
  StyledHeader,
  StyledLoginLogoutBackground,
} from "../CommonPage.styles";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <StyledLoginLogoutBackground>
      <StyledCardContainer>
        <Card>
          <StyledCardContentContainer>
            <StyledHeader>You've been logged out</StyledHeader>
            <Button onClick={() => navigate("/login")}>Go to login</Button>
          </StyledCardContentContainer>
        </Card>
      </StyledCardContainer>
    </StyledLoginLogoutBackground>
  );
};

export default Logout;
