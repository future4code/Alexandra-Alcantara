import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logoname from "../../images/logoname.png";
import {
  FooterContainer,
  Institutional,
  Pac,
  Blog,
  App,
  Contacts,
  LogoName,
  SocialLink,
} from "./footer-style";

export default function Footer() {
  return (
    <FooterContainer>
      <Grid
        h="300px"
        templateColumns="repeat(5, 1fr)"
        color="#FFFFFF"
        paddingTop="30px"
        fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"
      >
        <GridItem w="300px">
          <Pac>Pacotes</Pac>
          <Grid
            templateRows="repeat(3, 1fr)"
            justifyContent="center"
            paddingBottom="40px"
            lineHeight="1.6"
          >
            <a href="">Para casais</a>
            <a href="">Para a família</a>
            <a href="">Para os amigos</a>
          </Grid>
        </GridItem>
        <GridItem>
          <Blog>Blog</Blog>
          <Grid
            templateRows="repeat(3, 1fr)"
            justifyContent="center"
            lineHeight="1.6"
          >
            <a href="">Plutão é planeta?</a>
            <a href="">Vida extraterrestre</a>
            <a href="">Acessibilidade no espaço</a>
            <a href="">Pets no espaço</a>
          </Grid>
        </GridItem>
        <GridItem>
          <Institutional>Institucional</Institutional>
          <Grid
            templateRows="repeat(3, 1fr)"
            justifyContent="center"
            lineHeight="1.6"
          >
            <a href="">Sobre</a>
            <a href="">Portfólio</a>
            <a href="">Compliance</a>
          </Grid>
        </GridItem>
        <GridItem>
          <Contacts>Contato</Contacts>
          <Grid
            templateRows="repeat(3, 1fr)"
            justifyContent="center"
            lineHeight="1.6"
          >
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
        <GridItem
          textAlign="center"
          borderTop="1px solid #FFFFFF"
          w="87%"
          h="75%"
          margin="0 auto"
          gridColumn="1/6"
          display="flex"
          alignItems="center"
        >
          <LogoName src={logoname} alt="" />
          <SocialLink href="">
            <FontAwesomeIcon size="2x" icon={faFacebook} />
          </SocialLink>
          <SocialLink href="">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </SocialLink>
          <SocialLink href="">
            <FontAwesomeIcon size="2x" icon={faTwitter} />
          </SocialLink>
          <SocialLink href="">
            <FontAwesomeIcon size="2x" icon={faYoutube} />
          </SocialLink>
        </GridItem>
        <Grid
          borderTop="1px solid #2e2e2e"
          gridColumn="1/6"
          backgroundColor="#2e2e2e"
          alignItems="center"
          justifyContent="center"
          fontSize="15px"
        >
          LabeX &copy; 2021 | Todos os direitos reservados
        </Grid>
      </Grid>
    </FooterContainer>
  );
}
