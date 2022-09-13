import styled from "styled-components";
import ArrowUpIcon from "../Common/Icons/ArrowUpIcon";

export const StyledTableHeader = styled.th``;

export const StyledArrowContainer = styled.div<{
  $isAscending?: boolean;
  $isVisible?: boolean;
}>`
  transition: transform 0.2s ease-in;
  transform: ${({ $isAscending }) => ($isAscending ? "" : "rotate(180deg)")};
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")}; ;
`;

export const StyledArrowUp = styled(ArrowUpIcon)<{ $isAscending?: boolean }>`
  font-size: 1em;
  height: 1em;
  width: 1em;
`;

export const StyledTable = styled.table`
  margin-top: 24px;
  display: block;
  overflow-y: auto;
  border-radius: 8px;
  border-spacing: 0;
  border-collapse: collapse;
  min-height: 200px;
  opacity: 0.7;
  height: 80vh;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 769px) {
    width: 40vw;
    max-width: 500px;
  }

  tbody {
    width: 100%;
    display: table;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }

  tr:first-child th:first-child {
    border-top-left-radius: 8px;
  }
  tr:first-child th:last-child {
    border-top-right-radius: 8px;
  }
  th {
    position: sticky;
    top: 0;
    padding: 0.5em;
    background: #aaaaaa;
    line-height: 1.5em;
    div {
      display: flex;
    }
  }
  tr {
    background: #dbdbdb;
    &:hover {
      user-select: none;
      background-color: #d7f0fd;
      cursor: pointer;
    }
    &:not(:first-child):not(:last-child) {
      border-bottom: 1px solid #cccccc;
    }
  }

  td {
    padding: 0.25em;
  }
`;
