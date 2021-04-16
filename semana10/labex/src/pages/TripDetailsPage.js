import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { axiosConfig, baseUrl } from "../parameters/baseUrl";
import { useRequestData } from "../hooks/useRequestData";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState([]);
  useProtectedPage();
  console.log("Teste de userProtected");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/trip/${params.id}`, axiosConfig)
      .then((res) => {
        setTrip(res.data.trip);
        console.log("Retorno da requisição de tripDetail:", res);
      })
      .catch((err) => {
        console.log(err);
        alert("Algo deu errado!");
      });
  };

  const componentsTrip =
    trip.length === 0 ? null : (
      <div>
        <p>{trip.name}</p>
        <p>{trip.planet}</p>
      </div>
    );

  const componentsCandidates =
    trip.candidates &&
    trip.candidates.map((candidates) => {
      console.log(candidates);
      return (
        <div key={candidates.name}>
          <p>{candidates.name}</p>;
        </div>
      );
    });

  return (
    <div>
      <h1>
        Página de detalhes de cada viagem com aprovação/rejeição de candidatos
        (acesso adm)
      </h1>
      {componentsCandidates}
      {componentsTrip}
      <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
    </div>
  );
};

export default TripDetailsPage;
