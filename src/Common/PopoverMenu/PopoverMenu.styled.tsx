import styled from "styled-components";

export const StyledPopover = styled.div`
  .popover__wrapper {
    position: relative;
    display: inline-block;
    padding: 1.5rem;
  }

  .popover__title:hover {
    cursor: pointer;
    .popover__title--text {
      font-weight: 600;
    }
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
