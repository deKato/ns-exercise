import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth/AuthContext";
import Button from "../Button/Button";
import MenuIcon from "../Icons/MenuIcon";
import PopoverMenu from "../PopoverMenu/PopoverMenu";
import { StyledPageHeader } from "./PageHeader.styled";

const PageHeader = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    logout();
    return navigate("/logout");
  };

  return (
    <StyledPageHeader>
      <div>Server List</div>
      <PopoverMenu
        menuButtonText={"Menu"}
        menuButtonIcon={<MenuIcon />}
        popoverBody={<Button onClick={logoutAndRedirect}>Logout</Button>}
      />
    </StyledPageHeader>
  );
};

export default PageHeader;
