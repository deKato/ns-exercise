import React, { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { StyledPopover } from "./PopoverMenu.styled";

interface IPopoverMenuProps {
  menuButtonText: string;
  menuButtonIcon: React.ReactNode;
  popoverBody: React.ReactNode;
}

const PopoverMenu = (props: IPopoverMenuProps) => {
  const { menuButtonText, menuButtonIcon, popoverBody } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  const ref = useOutsideClick(closeMenuHandler);

  return (
    <StyledPopover>
      <div ref={ref} className="popover__wrapper">
        <div className="popover__title" onClick={openMenuHandler}>
          <span className="popover__title--text">{menuButtonText}</span>
          <span className="popover__title--icon">{menuButtonIcon}</span>
        </div>
        {isMenuOpen && <div className="popover__content">{popoverBody}</div>}
      </div>
    </StyledPopover>
  );
};

export default PopoverMenu;
