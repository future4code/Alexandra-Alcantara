import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/header/Header";
import { goToListTripsPage } from "../routes/coordinator";
import { goToLoginPage } from "../routes/coordinator";
import { Box } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import adm from "../images/adm.jpg";
import candidato from "../images/candidato.png";
import styled from "styled-components";

const WelcomeText = styled.p`
  position: relative;
  top: 70px;
  width: fit-content;
  margin: 0 auto;
  font-size: 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <WelcomeText>Olá! Escolha abaixo para começar :)</WelcomeText>
      <Grid
        templateColumns="repeat(2, 1fr)"
        margin="0 auto"
        marginTop="115px"
        w="50%"
      >
        <Box boxSize="100%" h="40vh" w="250px" margin="0 auto">
          <Image
            onClick={() => goToListTripsPage(history)}
            src={candidato}
            alt="imagem da administração"
            _hover={{
              transform: "scale(1.05)",
              transition: "all 0.3s ease 0s",
              opacity: "1",
              cursor: "pointer",
            }}
            boxSize="100%"
            objectFit="cover"
            filter="drop-shadow(0px 4px 9px gray)"
            borderRadius="30px"
            opacity="0.7"
          />
        </Box>
        <Box boxSize="100%" h="40vh" w="250px" margin="0 auto">
          <Image
            onClick={() => goToLoginPage(history)}
            src={adm}
            alt="imagem do candidato"
            _hover={{
              transform: "scale(1.05)",
              transition: "all 0.3s ease 0s",
              opacity: "1",
              cursor: "pointer",
            }}
            boxSize="100%"
            objectFit="cover"
            filter="drop-shadow(0px 4px 9px gray)"
            borderRadius="30px"
            opacity="0.7"
          />
        </Box>
      </Grid>
    </div>
  );
};

export default HomePage;
