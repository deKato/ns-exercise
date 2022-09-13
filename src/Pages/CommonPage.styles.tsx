import styled from "styled-components";

export const StyledCardContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const StyledLoginLogoutBackground = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100%;
  overflow: auto;
`;

export const StyledHeader = styled.h1`
  white-space: nowrap;
  font-family: "Courier";
  letter-spacing: 3px;
  font-size: 3rem;
  font-weight: 600;
  color: #000;
`;
