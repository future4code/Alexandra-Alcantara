import React from "react";
import robot from "../../assets/images/robot.png";
import Typography from "@material-ui/core/Typography";
import { ErrorPageContainer, ErrorImage } from "./styled";
import { goToPostsList } from "../../routes/coordinator";
import { Button, Box } from "@material-ui/core";
import { useHistory } from "react-router";

const ErrorPage = () => {
  const history = useHistory();

  return (
    <ErrorPageContainer>
      <ErrorImage src={robot} />
      <Box mb={1}>
        <Typography color={"primary"} variant={"h4"} align={"center"}>
          Erro 404
        </Typography>
      </Box>
      <Box>
        <Typography color={"primary"} variant={"h5"} align={"center"}>
          Página não encontrada
        </Typography>
      </Box>
      <Box m={4} mt={1} mb={1}>
        <Typography color={"primary"} variant={"h6"} align={"center"}>
          Em caso de pânico, clique no botão abaixo:
        </Typography>
      </Box>
      <Box mt={1}>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={() => goToPostsList(history)}
        >
          HomePage
        </Button>
      </Box>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
