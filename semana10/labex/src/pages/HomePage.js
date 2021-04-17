import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/header/Header";
import { goToListTripsPage } from "../routes/coordinator";
import { goToLoginPage } from "../routes/coordinator";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div>
        <Grid
          templateColumns="repeat(2, 1fr)"
          marginTop="50px"
          border="1px solid #000000"
        >
          <GridItem margin="0 auto" border="1px solid #000000">
            <Box boxSize="sm" h="40vh" w="250px" border="1px solid red">
              <button onClick={() => goToLoginPage(history)}>Admin</button>
            </Box>
          </GridItem>
          <GridItem margin="0 auto" border="1px solid #000000">
            <Box boxSize="sm" h="40vh" w="250px" border="1px solid red">
              <button onClick={() => goToListTripsPage(history)}>
                Candidato
              </button>
            </Box>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
