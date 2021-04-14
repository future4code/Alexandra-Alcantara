import React from "react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import {
  goToCreateTripPage,
  goToListTripsPage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../routes/coordinator";

const AdminHomePage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Página do painel do admin (acesso adm).</h1>
      <button onClick={() => goToListTripsPage(history)}>Home</button>
      <button onClick={() => goToLoginPage(history)}>Logout</button>
      <button onClick={() => goToTripDetailsPage(history)}>
        Ver detalhes da viagem
      </button>
      <button onClick={() => goToCreateTripPage(history)}>
        Criar nova viagem
      </button>
    </div>
  );
};

export default AdminHomePage;
