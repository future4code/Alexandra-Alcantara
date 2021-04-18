import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  background-color: #170028;
  margin-top: 50px;
`;

const Institutional = styled.p`
  text-align: center;
  width: 90px;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 8px;
  margin: 0 0 12px 91px;
  text-align: left;
`;

const Pac = styled.p`
  text-align: left;
  margin: 0 0 12px 95px;
  width: 85px;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 8px;
`;
const Blog = styled.p`
  text-align: left;
  width: 125px;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 8px;
  margin: 0 0 12px 43px;
`;

const App = styled.p`
  text-align: center;
  border-bottom: 1px solid #ffffff;
  margin: 0 0 12px 91px;
  padding-bottom: 8px;
  width: 68px;
  text-align: left;
`;

const Contacts = styled.p`
  text-align: center;
  margin: 0 0 12px 83px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ffffff;
  width: 95px;
  text-align: left;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Grid
        h="250px"
        templateColumns="repeat(5, 1fr)"
        color="#FFFFFF"
        paddingTop="30px"
      >
        <GridItem w="300px">
          <Pac>Pacotes</Pac>
          <Grid templateRows="repeat(3, 1fr)" justifyContent="center">
            <a href="">Para casais</a>
            <a href="">Para a família</a>
            <a href="">Para os amigos</a>
          </Grid>
        </GridItem>
        <GridItem>
          <Blog>Blog</Blog>
          <Grid templateRows="repeat(3, 1fr)" justifyContent="center">
            <a href="">Plutão é planeta?</a>
            <a href="">Vida extraterrestre</a>
            <a href="">Acessibilidade no espaço</a>
            <a href="">Pets no espaço</a>
          </Grid>
        </GridItem>
        <GridItem>
          <Institutional>Institucional</Institutional>
          <Grid templateRows="repeat(3, 1fr)" justifyContent="center">
            <a href="">Sobre</a>
            <a href="">Portfólio</a>
            <a href="">Compliance</a>
          </Grid>
        </GridItem>
        <GridItem>
          <Contacts>Contato</Contacts>
          <Grid templateRows="repeat(3, 1fr)" justifyContent="center">
            <a href="">Fale conosco</a>
            <a href="">Chat online</a>
            <a href="">E-mail</a>
          </Grid>
        </GridItem>
        <GridItem>
          <App>App</App>
          <Grid templateColumns="repeat(2, 42px)" justifyContent="center">
            <a href="">
              <FontAwesomeIcon size="2x" icon={faGooglePlay} />
            </a>
            <a href="">
              <FontAwesomeIcon size="2x" icon={faApple} />
            </a>
          </Grid>
        </GridItem>
      </Grid>
    </FooterContainer>
  );
}
