import React from "react";
import Header from "./components/header/Header";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Router />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
