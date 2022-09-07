import styled from "styled-components";

export const StyledLoginBackground = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100%;
`;

export const StyledLoginCardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  /* @media only screen and (max-width: 768px) {
    width: 100%;
  } */

  /* @media only screen and (min-width: 769px) {
    align-items: center;
  } */
`;

export const StyledLoginHeader = styled.h1`
  white-space: nowrap;
  font-family: "Courier";
  font-size: 3rem;
  font-weight: 600;
  color: #5e87b8;
  border-right: 4px solid #000; /*This will be the blinking cursor*/
  animation: cursor 1s infinite step-end;
  width: fit-content;

  @keyframes cursor {
    0%,
    100% {
      border-color: transparent;
    }
    50% {
      border-color: #000;
    }
  }
`;
