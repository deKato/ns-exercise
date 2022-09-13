import React from "react";
import { Card } from "../../Components/Common/Card/Card";
import PageHeader from "../../Components/Common/PageHeader/PageHeader";
import ServerList from "../../Components/ServerList/ServerList";
import {
  StyledBackground,
  StyledServerListContainer,
  StyledServerListHeader,
} from "./ServerListPage.styled";

const ServerListPage = () => {
  return (
    <StyledBackground>
      <PageHeader />
      <StyledServerListContainer>
        <ServerList />
      </StyledServerListContainer>
    </StyledBackground>
  );
};

export default ServerListPage;
