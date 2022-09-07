import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  height: 30px;
  padding: 0px 15px;
  text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
  /* background: linear-gradient(
    92.88deg,
    rgb(69, 94, 181) 9.16%,
    rgb(86, 67, 204) 43.89%,
    rgb(103, 63, 215) 64.72%
  ); */
  background: #5e87b8;
  transition: all 0.5s ease 0s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
    transition: all 0.3s ease 0s;
  }
`;
