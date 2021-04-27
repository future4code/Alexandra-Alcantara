import React from "react";
import { LogoImage, ScreenContainer, Title, LogoContainer } from "./styled";
import logo from "../../assets/images/logo.png";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <LogoContainer>
        <LogoImage src={logo} />
        <Title>LABEDDIT</Title>
      </LogoContainer>
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
