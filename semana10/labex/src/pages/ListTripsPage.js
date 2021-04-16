import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToAdminHomePage,
  goToApplicationFormPage,
} from "../routes/coordinator";
import { useRequestData } from "../hooks/useRequestData";

const ListTripsPage = (props) => {
  const history = useHistory();
  const getTrips = useRequestData("/trips", []);
  console.log(getTrips);

  const tripsComponents =
    getTrips.trips &&
    getTrips.trips.map((trip) => {
      return (
        <div>
          <p>{trip.name}</p>
        </div>
      );
    });

  return (
    <div>
      <h1>Página em que aparecerão os cards com as viagens.</h1>
      <button onClick={() => goToAdminHomePage(history)}>Admin</button>

      <button onClick={() => goToApplicationFormPage(history)}>
        Inscrever
      </button>
      {tripsComponents}
    </div>
  );
};

export default ListTripsPage;
