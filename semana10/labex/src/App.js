import React from "react";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ChakraProvider>
      <Router />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
