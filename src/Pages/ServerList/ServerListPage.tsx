import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Card } from "../../Common/Card/Card";
import ServerList from "../../ServerList/ServerList";
import ServerList2 from "../../ServerList/ServerList2";
import AuthContext from "../../store/auth/AuthContext";
import {
  StyledBackground,
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
      <Card>
        <StyledServerListHeader>Server list</StyledServerListHeader>
        <ServerList2 />
      </Card>

      <button onClick={logoutAndRedirect}>Logout</button>
    </StyledBackground>
  );
};

export default ServerListPage;
