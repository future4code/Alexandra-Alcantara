import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import logoname from "../../images/logoname.png";
import { Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

const HeaderContainer = styled.div`
  background-color: #170028;
  height: 130px;
`;

const Logo = styled.img`
  width: 80px;
  margin-right: 5px;
`;

const LogoName = styled.img`
  width: 190px;
  margin-bottom: 3px;
`;

const Slogan = styled.p`
  color: #00e0ae;
  margin-left: 7px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const LinksContainer = styled.nav`
  background-color: #6ba292;
  text-align: center;
  padding: 4px;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  margin-right: 60px;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Grid h="130px" templateColumns="repeat(4, 1fr)">
        <GridItem alignSelf="center" justifySelf="right">
          <Logo src={logo} alt="logo" />
        </GridItem>
        <GridItem colSpan={2} alignSelf="center" justifySelf="left">
          <LogoName src={logoname} alt="nome da logo" />
          <Slogan> Encontre as melhores viagens espaciais</Slogan>
        </GridItem>
        <GridItem color="#00e0ae" alignSelf="end"></GridItem>
      </Grid>
      <Grid
        templateColumns="repeat(4, 1px)"
        backgroundColor="#6ba292"
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
        padding="4px"
        color="#FFFFFF"
        justifyItems="center"
      >
        <a href="">Home</a>
        <a href="">Pacotes</a>
        <a href="">Blog</a>
        <a href="">Contato</a>
      </Grid>
    </HeaderContainer>
  );
}
