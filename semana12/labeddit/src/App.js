import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import GlobalState from "./global/GlobalState";

const App = () => {
  const token = localStorage.getItem("token");
  const [accessButton, setAccessButton] = useState(token ? "Logout" : "Login");

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <BrowserRouter>
          <Header
            accessButton={accessButton}
            setAccessButton={setAccessButton}
          />
          <Router setAccessButton={setAccessButton} />
        </BrowserRouter>
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;
