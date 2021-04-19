import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../parameters/baseUrl";
import { useForm } from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectedPage";
import HeaderGeneral from "../components/header/HeaderGeneral";
import styled from "styled-components";
import { Image } from "@chakra-ui/react";
import space from "../images/space.jpeg";
import { FormControl, FormLabel, Grid, GridItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const InscriptionText = styled.p`
  width: fit-content;
  margin: 0 auto;
  margin-top: 70px;
  font-size: 1.4em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const initialForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);
  const history = useHistory();
  useProtectedPage();

  const handleClick = (event) => {
    event.preventDefault();
    resetForm();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Ops, algo deu errado! Verifique se o e-mail e senha digitados estão corretos e tente novamente."
        );
      });
  };

  return (
    <div>
      <HeaderGeneral />
      <InscriptionText>Bem-vinda, pessoa administradora!</InscriptionText>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem w="500px" ml="80px">
          <Box margin="60px 0 0 100px">
            <form onSubmit={handleClick}>
              <FormControl w="370px" float="right" isRequired>
                <FormLabel mt="8px" color="2e2e2e">
                  Email
                </FormLabel>
                <Input
                  placeholder="Email"
                  variant="filled"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </FormControl>

              <FormControl w="370px" float="right" isRequired>
                <FormLabel mt="8px" color="2e2e2e">
                  Senha
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Senha"
                  variant="filled"
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  type="password"
                />
              </FormControl>
              <Box
                as="button"
                borderRadius="md"
                bg="tomato"
                color="white"
                h={8}
                w="120px"
                margin="30px 0 0 140px"
                fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"
              >
                Entrar
              </Box>
            </form>
          </Box>
        </GridItem>
        <GridItem>
          <Box mt="60px">
            <Image
              w="70%"
              borderRadius="20px"
              src={space}
              alt="Imagem de um astronauta"
            />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default LoginPage;
