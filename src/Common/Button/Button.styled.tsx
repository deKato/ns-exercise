import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  height: 30px;
  padding: 0px 15px;
  text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
  transition: all 0.5s ease 0s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
    transition: all 0.3s ease 0s;
  }
  background: #7a579f;
  border-radius: 12px;
  letter-spacing: 1px;
`;
