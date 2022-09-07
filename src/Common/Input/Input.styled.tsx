import React from "react";
import styled from "styled-components";

export const StyledInput = styled(({ ...rest }) => <input {...rest} />)`
  color: rgba(0, 0, 0, 0.87);
  border-bottom-color: rgba(0, 0, 0, 0.42);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  padding: 6px 16px 6px;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 1px solid;
  border-radius: 4px 4px 0 0;
  //background: rgb(245, 245, 245);
  //height: 56px;
  :hover {
    border-bottom-color: rgba(0, 0, 0, 0.87);
    background: #ececec;
  }
  :focus {
    border-color: #6200ee;
    outline: none;
  }
`;
