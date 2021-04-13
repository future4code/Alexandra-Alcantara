import React from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";
import { goToLoginPage } from "../routes/coordinator";

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Home Page</h1>
      <p>aqui vai aparecer dois cards com a opção de candidato e admin.</p>
      <button onClick={() => goToLoginPage(history)}>
        Admin
      </button>
      <button onClick={() => goToListTripsPage(history)}>
        Candidato
      </button>
    </div>
  );
};

export default HomePage;
