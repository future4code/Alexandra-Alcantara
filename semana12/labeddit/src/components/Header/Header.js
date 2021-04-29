import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToLogin, goToPostsList } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

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
        <Typography variant="h6" color="inherit">
          LabEddit
        </Typography>
        <Button onClick={() => goToPostsList(history)} color="inherit">
          Home
        </Button>
        <Button onClick={accessButtonAction} color="inherit">
          {accessButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
