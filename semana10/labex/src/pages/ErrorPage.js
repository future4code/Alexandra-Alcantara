import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

const ErrorPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>
        Ops! Essa página não existe, clique no botão abaixo para ser direcionado
        para a homepage.
      </h1>
      <button onClick={() => goToHomePage(history)}>HomePage</button>
    </div>
  );
};

export default ErrorPage;
