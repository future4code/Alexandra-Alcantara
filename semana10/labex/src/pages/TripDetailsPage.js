import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { axiosConfig, baseUrl } from "../parameters/baseUrl";
import HeaderGeneral from "../components/header/HeaderGeneral";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const InscriptionText = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 1.3em;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const HorizontalLine = styled.hr`
  padding-bottom: 20px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const TripDetailsPage = () => {
  const [trip, setTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);

  useProtectedPage();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getTripDetail();
  }, [candidates]);

  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/trip/${params.id}`, axiosConfig)
      .then((res) => {
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err);
        alert("Algo deu errado!");
      });
  };

  const decideCandidate = (approval, id) => {
    const body = {
      approve: approval,
    };
    axios
      .put(
        `${baseUrl}/trips/${params.id}/candidates/${id}/decide`,
        body,
        axiosConfig
      )
      .then((res) => {
        console.log("Retorno da aprovação:", res);
      })
      .catch((err) => {
        console.log(err.data);
        alert("Aprovação ou reprovação não aconteceu!");
      });
  };

  const componentsTrip =
    trip.length === 0 ? (
      <p>Loading...</p>
    ) : (
      <Grid
        margin="0 auto"
        marginTop="15px"
        justifyContent="start"
        padding="15px"
        borderRadius="20px"
        backgroundColor="#ce6a6b"
        w="384px"
        h="195px"
      >
        <p>{trip.name}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Data: {trip.date}</p>
        <p>Descrição: {trip.description}</p>
        <p>Duração: {trip.durationInDays} dias</p>
      </Grid>
    );

  const componentsCandidates =
    trip.candidates &&
    trip.candidates.map((candidate) => {
      return (
        <Grid
          margin="0 auto"
          marginTop="15px"
          justifyContent="start"
          padding="15px"
          border="1px solid lightgray"
          borderRadius="20px"
          w="400px"
          h="190px"
          key={candidate.id}
        >
          <Box maxW="sm" borderRadius="lg">
            <Grid templateColumns="repeat(2, 1fr)" mb="10px">
              <button onClick={() => decideCandidate(true, candidate.id)}>
                <FontAwesomeIcon color="green" icon={faCheckCircle} />
              </button>
              <button onClick={() => decideCandidate(false, candidate.id)}>
                <FontAwesomeIcon color="red" icon={faTimesCircle} />
              </button>
            </Grid>
            <p>
              <Bold>{candidate.name}</Bold>, {candidate.age} anos,{" "}
              <Bold>{candidate.applicationText}</Bold>
            </p>
            <p>Profissão: {candidate.profession}</p>
            <p>País: {candidate.country}</p>
          </Box>
        </Grid>
      );
    });

  const componentsApproved =
    trip.approved &&
    trip.approved.map((approvedCandidate) => {
      return (
        <Grid
          margin="0 auto"
          marginTop="5px"
          justifyContent="start"
          padding="5px"
          borderRadius="5px"
          backgroundColor="#ce6a6b"
          w="384px"
          key={approvedCandidate.id}
        >
          <Box maxW="sm" borderRadius="lg">
            <p>
              {approvedCandidate.name}, {approvedCandidate.age} |{" "}
              {approvedCandidate.country}
            </p>
          </Box>
        </Grid>
      );
    });

  return (
    <div>
      <HeaderGeneral />
      <Grid
        templateColumns="1fr"
        alignItems="center"
        justifyContent="center"
        w="50%"
        margin="0 auto"
        marginTop="10px"
        paddingTop="50px"
      >
        <InscriptionText>Gerenciar Viagens e Candidatos</InscriptionText>
      </Grid>
      <Grid
        templateColumns="repeat(2, 1fr)"
        margin="0 auto"
        mt="40px"
        ml="50px"
        mb="40px"
      >
        <GridItem
          margin="0 auto"
          marginTop="15px"
          alignItems="center"
          justifyContent="start"
          padding="15px"
          borderRadius="20px"
          w="400px"
          h="250px"
          backgroundColor="#ebaca2"
          color="#FFFFFF"
        >
          <Bold>Dados da viagem</Bold>
          {componentsTrip}
        </GridItem>
        <GridItem
          margin="0 auto"
          marginTop="15px"
          padding="15px"
          borderRadius="20px"
          w="400px"
          minH="250px"
          backgroundColor="#ebaca2"
          color="#FFFFFF"
        >
          <Bold>Candidatos aprovados</Bold>
          {componentsApproved}
        </GridItem>
      </Grid>
      <HorizontalLine />
      <InscriptionText>Candidatos pendentes</InscriptionText>
      <Grid templateColumns="repeat(3, 1fr)">{componentsCandidates}</Grid>
    </div>
  );
};

export default TripDetailsPage;
