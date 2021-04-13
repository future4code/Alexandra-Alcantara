import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>
        Página de detalhes de cada viagem com aprovação/rejeição de candidatos
        (acesso adm)
      </h1>
      <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
    </div>
  );
};

export default ApplicationFormPage;
