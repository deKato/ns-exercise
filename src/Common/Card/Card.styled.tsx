import React from "react";
import styled from "styled-components";

export const StyledCard = styled(({ children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: fit-content;
  padding: 24px;
  height: fit-content;
  max-height: 70%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 769px) {
    width: 40vw;
    max-width: 500px;
  }
`;
