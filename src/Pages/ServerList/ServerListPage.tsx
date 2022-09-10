import React from "react";
import { Card } from "../../Common/Card/Card";
import PageHeader from "../../Common/PageHeader/PageHeader";
import ServerList from "../../ServerList/ServerList";
import {
  StyledBackground, StyledServerListContainer,
  StyledServerListHeader
} from "./ServerListPage.styled";

const ServerListPage = () => {

  return (
    <StyledBackground>
      <PageHeader/>
      <StyledServerListContainer>
        <ServerList />
      </StyledServerListContainer>
    </StyledBackground>
  );
};

export default ServerListPage;
