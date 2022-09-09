import styled from "styled-components";

export const StyledBackground = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  //background-size: 400% 400%;
  //animation: gradient 15s ease infinite;
  height: 100%;
`;

export const StyledServerListHeader = styled.h1`
  white-space: nowrap;
  font-family: "Courier";
  font-size: 2rem;
  font-weight: 600;
  color: #5e87b8;
  width: fit-content;
`;

export const StyledServerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledPageHeader = styled.div`
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledPopover = styled.div`
  .popover__wrapper {
    position: relative;
    display: inline-block;
    padding: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    .popover__title {
      &--text {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 769px) {
    .popover__title {
      &--icon {
        display: none;
      }
    }
  }

  .popover__content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    right: 12px;
    transform: translate(0, 0px);
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    width: auto;
  }

  .popover__wrapper:hover .popover__content {
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transform: translate(0, 10px);
    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }
`;
