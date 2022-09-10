import React from "react";
import styled from "styled-components";

export const StyledCard = styled(({ children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );;
  min-width: fit-content;
  padding: 24px;
  height: fit-content;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 24px;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 769px) {
    width: 40vw;
    max-width: 500px;
  }
`;
