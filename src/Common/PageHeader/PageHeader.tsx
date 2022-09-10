import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth/AuthContext";
import Button from "../Button/Button";
import MenuIcon from "../Icons/MenuIcon";
import { StyledPageHeader, StyledPopover } from "./PageHeader.styled";
import useOutsideClick from '../../hooks/useOutsideClick';


const PageHeader = () => {      
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutAndRedirect = () => {
    logout();
    return navigate("/logout");
  };

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  }

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  }

  const ref = useOutsideClick(closeMenuHandler);

  return (
    <StyledPageHeader>
      <div>Server List</div>
      <StyledPopover>
        <div ref={ref} className="popover__wrapper">
          <div className="popover__title" onClick={openMenuHandler}>
            <span className="popover__title--text">Menu</span>
            <span className="popover__title--icon">
              <MenuIcon />
            </span>
          </div>
          {isMenuOpen && <div className="popover__content">
            <Button onClick={logoutAndRedirect}>Logout</Button>
          </div>}
        </div>
      </StyledPopover>
    </StyledPageHeader>
  );
};

export default PageHeader;
