import styled from "styled-components";

export const StyledSpinner = styled.div`
  margin-top: 48px;
  .spinner {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .spinner:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: spinner 1.2s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
