import React from "react";
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Página em que aparecerão os cards com as viagens.</h1>
      <button onClick={() => goToApplicationFormPage(history)}>
        Inscrever
      </button>
    </div>
  );
};

export default ApplicationFormPage;
