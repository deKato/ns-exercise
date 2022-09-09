import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../Common/Button/Button";
import { Card } from "../../Common/Card/Card";
import MenuIcon from "../../Common/Icons/MenuIcon";
import ServerList from "../../ServerList/ServerList";
import ServerList2 from "../../ServerList/ServerList2";
import AuthContext from "../../store/auth/AuthContext";
import {
  StyledBackground,
  StyledPageHeader,
  StyledPopover,
  StyledServerListContainer,
  StyledServerListHeader,
} from "./ServerListPage.styled";

const ServerListPage = () => {
  const { logout } = useContext(AuthContext);

  const logoutAndRedirect = () => {
    logout();
    return <Navigate to="/logout" />;
  };
  return (
    <StyledBackground>
      <StyledPageHeader>
        <StyledPopover>
          <div className="popover__wrapper">
            <div className="popover__title">
              <span className="popover__title--text">Menu</span>
              <span className="popover__title--icon">
                <MenuIcon />
              </span>
            </div>
            <div className="popover__content">
              <Button onClick={logoutAndRedirect}>Logout</Button>
            </div>
          </div>
        </StyledPopover>
      </StyledPageHeader>

      <StyledServerListContainer>
        <Card>
          <StyledServerListHeader>Server list</StyledServerListHeader>
          <ServerList2 />
        </Card>
      </StyledServerListContainer>
    </StyledBackground>
  );
};

export default ServerListPage;
