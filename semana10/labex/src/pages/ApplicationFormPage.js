import React from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Página do formulário de candidatura</h1>
      <button onClick={() => goToListTripsPage(history)}>Home</button>
    </div>
  );
};

export default ApplicationFormPage;
