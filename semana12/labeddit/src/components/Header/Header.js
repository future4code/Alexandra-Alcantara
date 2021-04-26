import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToLogin, goToPostsList } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" color="inherit">
          LabEddit
        </Typography>
        <Button onClick={() => goToPostsList(history)} color="inherit">
          Home
        </Button>
        <Button onClick={() => goToLogin(history)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
