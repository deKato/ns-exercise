import styled from "styled-components";
import { StyledHeader } from "../CommonPage.styles";

export const StyledLoginHeader = styled(StyledHeader)`
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
