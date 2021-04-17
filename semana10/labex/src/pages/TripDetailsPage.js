import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { axiosConfig, baseUrl } from "../parameters/baseUrl";
import { useRequestData } from "../hooks/useRequestData";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);
  console.log("Impresão dos candidatos", candidates);

  useProtectedPage();
  console.log("Teste de userProtected");
  const history = useHistory();
  const params = useParams();
  console.log("Impressão do parâmetro:", params.id);

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/trip/${params.id}`, axiosConfig)
      .then((res) => {
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
        console.log("Retorno da requisição de tripDetail:", res);
      })
      .catch((err) => {
        console.log(err);
        alert("Algo deu errado!");
      });
  };

  // const decideCandidate = async (approval) => {
  //   const body = {
  //     approve: approval,
  //   };
  //   const res = await axios.put(
  //     `${baseUrl}/trips/${trip.id}/candidates/${candidates.id}/decide`,
  //     body,
  //     axiosConfig
  //   );
  // };

  const decideCandidate = (approval, id) => {
    const body = {
      approve: approval,
    };
    axios
      .put(
        `${baseUrl}/trips/${params.id}/candidates/${id}/decide`,
        body,
        axiosConfig
      )
      .then((res) => {
        console.log("Retorno da aprovação:", res);
        alert("Requisição ok!");
      })
      .catch((err) => {
        console.log(err.data);
        alert("Aprovação ou reprovação não aconteceu!");
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
    trip.candidates.map((candidate) => {
      console.log(candidate);
      return (
        <div key={candidate.id}>
          <p>{candidate.name}</p>
          <button onClick={() => decideCandidate(true, candidate.id)}>
            Aprovar
          </button>
          <button onClick={() => decideCandidate(false, candidate.id)}>
            Reprovar
          </button>
        </div>
      );
    });

  const componentsApproved =
    trip.approved &&
    trip.approved.map((approvedCandidate) => {
      console.log(approvedCandidate);
      return (
        <div key={approvedCandidate.id}>
          <p>{approvedCandidate.name}</p>
        </div>
      );
    });

  return (
    <div>
      <h1>
        Página de detalhes de cada viagem com aprovação/rejeição de candidatos
        (acesso adm)
      </h1>
      <h3>Dados da viagem</h3>
      {componentsTrip}
      <h3>Candidatos pendentes</h3>
      {componentsCandidates}
      <h3>Candidatos aprovados</h3>
      {componentsApproved}
      <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
    </div>
  );
};

export default TripDetailsPage;
