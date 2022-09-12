import styled from "styled-components";

export const StyledLogoutBackground = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100%;
  overflow: auto;
`;

export const StyledLogoutCardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const StyledLogoutHeader = styled.h1`
  white-space: nowrap;
  font-family: "Courier";
  font-size: 3rem;
  font-weight: 600;
  color: #5e87b8;
`;
