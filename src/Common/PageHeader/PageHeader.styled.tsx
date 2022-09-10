import styled from "styled-components";

export const StyledPageHeader = styled.div`
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div:first-child {
    flex: 1;
    padding-left: 24px;
    font-family: "Courier";
  }
`;

export const StyledPopover = styled.div`
  .popover__wrapper {
    position: relative;
    display: inline-block;
    padding: 1.5rem;
  }

  .popover__title:hover {
    cursor: pointer;
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
    z-index: 1;
    position: absolute;
    right: 12px;
    border-radius: 8px;
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    @media only screen and (max-width: 768px) {
        width: 40vw;
  }

  @media only screen and (min-width: 769px) {
    width: auto;
  }
}
`;
