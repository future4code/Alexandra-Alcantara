import React from "react";
import logo from "../../images/logo.png";
import logoname from "../../images/logoname.png";
import { Grid, GridItem } from "@chakra-ui/react";
import { HeaderContainer, Logo, LogoName, Slogan } from "./header-style";

export default function HeaderCandidate() {
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
