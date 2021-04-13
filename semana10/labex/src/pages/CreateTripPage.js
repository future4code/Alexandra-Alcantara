import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Página para criar viagens (acesso adm).</h1>
      <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
    </div>
  );
};

export default ApplicationFormPage;
