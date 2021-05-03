import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { StyledToolbar, StyledTypography, StyledBox, ImgLogo } from "./styled";
import { goToLogin, goToPostsList } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = ({ accessButton, setAccessButton }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const accessButtonAction = () => {
    if (token) {
      logout();
      setAccessButton("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledBox
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ImgLogo src={logo} alt="Logo" />
          <StyledTypography
            onClick={() => goToPostsList(history)}
            variant="h6"
            color="inherit"
          >
            LabEddit
          </StyledTypography>
        </StyledBox>
        <Button onClick={accessButtonAction} color="inherit">
          {accessButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
