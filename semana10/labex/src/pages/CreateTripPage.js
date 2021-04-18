import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { axiosConfig, baseUrl } from "../parameters/baseUrl";
import HeaderGeneral from "../components/header/HeaderGeneral";
import { FormControl, FormLabel, Grid, GridItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import styled from "styled-components";
import { Image } from "@chakra-ui/react";
import astronaut from "../images/astronaut2.jpeg";

const InscriptionText = styled.p`
  width: fit-content;
  margin: 0 auto;
  margin-top: 70px;
  font-size: 1.4em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const RedStar = styled.span`
  color: #ff0000;
`;

const initialForm = {
  name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",
};

const CreateTripPage = () => {
  const [trip, setTrip] = useState([]);
  const [form, onChange, resetForm] = useForm(initialForm);
  const history = useHistory();

  const createTrip = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
    const token = window.localStorage.getItem("token");

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(`${baseUrl}/trips`, body, axiosConfig)
      .then((res) => {
        console.log(res.data);
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        alert("Ops, algo deu errado!");
      });
  };

  return (
    <div>
      <HeaderGeneral />
      <InscriptionText>Nova Viagem</InscriptionText>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem position="relative" left="20px">
          <Box margin="60px 0 0 40px" w="80%">
            <form onSubmit={createTrip}>
              <FormControl isRequired>
                <FormLabel mt="8px" color="2e2e2e">
                  Nome
                </FormLabel>
                <Input
                  placeholder="Thanos O Grande"
                  variant="filled"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                />
              </FormControl>

              <Text mb="8px" mt="8px" color="2e2e2e" isRequired>
                Descrição <RedStar>*</RedStar>
              </Text>
              <Textarea
                name="description"
                value={form.description}
                onChange={onChange}
                size="sm"
                variant="filled"
                mb="10px"
                borderRadius="10px"
              />

              <FormControl
                isRequired
                w="250px"
                display="inline-block"
                float="left"
              >
                <FormLabel color="2e2e2e">Data da viagem</FormLabel>
                <Input
                  placeholder="Thanos O Grande"
                  variant="filled"
                  name="date"
                  value={form.date}
                  type="date"
                  onChange={onChange}
                />
              </FormControl>

              <FormControl
                isRequired
                w="250px"
                display="inline-block"
                float="right"
              >
                <FormLabel
                  color="2e2e2e"
                  name="durationInDays"
                  value={form.durationInDays}
                  onChange={onChange}
                >
                  Duração (dias)
                </FormLabel>
                <NumberInput min={18} variant="filled">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl display="inline-block" isRequired>
                <FormLabel mt="8px" color="2e2e2e">
                  Planeta
                </FormLabel>
                <Select
                  placeholder="Selecione um planeta"
                  variant="filled"
                  name="planet"
                  value={form.planet}
                  onChange={onChange}
                >
                  <option>Mercúrio</option>
                  <option>Vênus</option>
                  <option>Marte</option>
                  <option>Júpiter</option>
                  <option>Saturno</option>
                  <option>Urano</option>
                  <option>Netuno</option>
                  <option>Plutão</option>
                </Select>
              </FormControl>

              <Box
                as="button"
                borderRadius="md"
                bg="tomato"
                color="white"
                h={8}
                w="120px"
                margin="0 auto"
                display="block"
                mt="25px"
                fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"
              >
                Enviar
              </Box>
            </form>
          </Box>
        </GridItem>
        <GridItem position="relative" right="30px">
          <Box opacity="0.8" mt="80px">
            <Image
              borderRadius="20px"
              src={astronaut}
              alt="Imagem de um astronauta"
            />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default CreateTripPage;
