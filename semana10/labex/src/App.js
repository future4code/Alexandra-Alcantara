import React from "react";
import Header from "./components/header/Header";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
