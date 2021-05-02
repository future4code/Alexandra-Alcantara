import React from "react";
import { AppBar, Typography, Button, Box } from "@material-ui/core";
import { StyledToolbar, ImgLogo, StyledBox } from "./styled";
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
          <Typography
            onClick={() => goToPostsList(history)}
            variant="h6"
            color="inherit"
          >
            LabEddit
          </Typography>
        </StyledBox>
        <Button onClick={accessButtonAction} color="inherit">
          {accessButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
