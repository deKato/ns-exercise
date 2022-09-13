import styled from "styled-components";

export const StyledPageHeader = styled.div`
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Courier";
  > *:first-child {
    font-weight: 600;
    font-size: 24px;
    flex: 1;
    padding-left: 24px;
  }
`;
