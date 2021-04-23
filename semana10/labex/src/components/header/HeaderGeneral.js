import React from "react";
import logo from "../../images/logo.png";
import logoname from "../../images/logoname.png";
import { Grid, GridItem } from "@chakra-ui/react";
import { HeaderContainer, Logo, LogoName, Slogan } from "./header-style";
import styled from "styled-components";
import {
  goToAdminHomePage,
  goToApplicationFormPage,
  goToListTripsPage,
} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const AdmMenu = styled.button`
  background-color: gray;
  margin-right: 5px;
  text-align: center;
`;

export default function HeaderGeneral() {
  const history = useHistory();

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };
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
      </Grid>
      <Grid
        templateColumns="repeat(4, 50px) repeat(2, 120px)"
        backgroundColor="#6ba292"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        padding="4px"
        color="#FFFFFF"
        justifyItems="center"
        paddingLeft="250px"
      >
        <a onClick={() => goToListTripsPage(history)}>Home</a>
        <a href="">Pacotes</a>
        <a href="">Blog</a>
        <a href="">Contato</a>
        <Grid
          templateColumns="repeat(2, 1fr)"
          w="270px"
          h="100%"
          alignItems="center"
          marginLeft="365px"
        >
          <AdmMenu onClick={() => goToAdminHomePage(history)}>
            Painel Admin
          </AdmMenu>
          <AdmMenu onClick={logout}>Logout</AdmMenu>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}
