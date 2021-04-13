import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Página de login do adm</h1>
      <label>Email</label>
      <input></input>
      <label>Senha</label>
      <input></input>
      <button onClick={() => goToAdminHomePage(history)}>Entrar</button>
    </div>
  );
};

export default ApplicationFormPage;
