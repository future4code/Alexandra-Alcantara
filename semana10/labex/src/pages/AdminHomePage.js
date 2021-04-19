import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { axiosConfig, baseUrl } from "../parameters/baseUrl";
import { goToCreateTripPage, goToTripDetailsPage } from "../routes/coordinator";
import HeaderGeneral from "../components/header/HeaderGeneral";
import { Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const InscriptionText = styled.p`
  width: fit-content;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 1.3em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TrashButton = styled.button`
  margin-left: 5px;
`;

const AdminHomePage = () => {
  useProtectedPage();
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get(`${baseUrl}/trips`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => setTrips(res.data.trips))
      .catch((err) => console.log(err));
  };

  const deleteTrip = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/trips/${id}`, axiosConfig);
      alert("Viagem removida com sucesso!");
    } catch (err) {
      alert("Ops, algo deu errado!");
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      <HeaderGeneral />
      <Grid templateColumns="1fr 450px">
        <InscriptionText>Viagens Cadastradas</InscriptionText>
        <Box
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          h={8}
          w="100px"
          mt="55px"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"
          onClick={() => goToCreateTripPage(history)}
        >
          +Viagem
        </Box>
      </Grid>

      {trips.map((trip) => {
        return (
          <Grid
            templateColumns="1fr 50px"
            margin="0 auto"
            alignItems="center"
            justifyContent="start"
            padding="8px"
            borderBottom="1px solid gray"
            w="50%"
            h="fit-content"
            backgroundColor=""
            onClick={() => goToTripDetailsPage(history, trip.id)}
            _hover={{
              background: "teal.500",
              color: "white",
              cursor: "pointer",
            }}
          >
            <GridItem>
              <p>{trip.name}</p>
            </GridItem>
            <GridItem
              w="35px"
              padding="5px"
              borderRadius="50%"
              _hover={{
                background: "white",
                color: "white",
              }}
            >
              <TrashButton onClick={() => deleteTrip(trip.id)}>
                <FontAwesomeIcon color="gray" icon={faTrash} />
              </TrashButton>
            </GridItem>
          </Grid>
        );
      })}
    </div>
  );
};

export default AdminHomePage;
