import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";
import { baseUrl } from "../parameters/baseUrl";
import React, { useEffect, useState } from "react";

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getTrips = () => {
      axios
        .get(`${baseUrl}/trips`)
        .then((res) => setTrips(res.data.trips))
        .catch((err) => console.log(err));
    };
    getTrips();
  }, [trips]);

  return (
    <div>
      <h1>Página em que aparecerão os cards com as viagens.</h1>
      <button onClick={() => goToApplicationFormPage(history)}>
        Inscrever
      </button>
      {trips.map((trip) => {
        return (
          <div>
            <p>{trip.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListTripsPage;
