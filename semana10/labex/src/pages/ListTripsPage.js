import React from "react";
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";
import { useRequestData } from "../hooks/useRequestData";
import HeaderGeneral from "../components/header/HeaderGeneral";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../images/logo.png";
import { Flex, Spacer } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import styled from "styled-components";

const InscriptionText = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 1.3em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ListTripsPage = () => {
  const history = useHistory();
  const getTrips = useRequestData("/trips", []);
  console.log(getTrips);

  const tripsComponents =
    getTrips.trips &&
    getTrips.trips.map((trip) => {
      return (
        <Grid
          margin="0 auto"
          marginTop="15px"
          alignItems="center"
          justifyContent="start"
          padding="15px"
          border="1px solid gray"
          borderRadius="20px"
          w="400px"
          h="190px"
        >
          <Box maxW="sm" borderRadius="lg">
            <p>Nome da viagem: {trip.name}</p>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Data: {trip.date}</p>
            <p>Duração: {trip.durationInDays} dias</p>
          </Box>
        </Grid>
      );
    });

  return (
    <div>
      <HeaderGeneral />
      <Grid
        templateColumns="repeat(2, 1fr)"
        marginTop="40px"
        alignItems="center"
        justifyContent="center"
        w="50%"
        margin="0 auto"
        paddingTop="50px"
      >
        <InscriptionText>Já escolheu a sua viagem? </InscriptionText>
        <Box
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          h={8}
          w="150px"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"
          onClick={() => goToApplicationFormPage(history)}
        >
          Inscreva-se aqui!
        </Box>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" marginTop="10px">
        {tripsComponents}
      </Grid>
    </div>
  );
};

export default ListTripsPage;
