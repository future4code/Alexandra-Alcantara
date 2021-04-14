import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useProtectedPage } from "../hooks/useProtectedPage";
import { baseUrl } from "../parameters/baseUrl";
import {
  goToCreateTripPage,
  goToListTripsPage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../routes/coordinator";

const AdminHomePage = () => {
  // useProtectedPage();
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getTrips = () => {
      // const token = window.localStorage.getItem("token");
      axios
        .get(`${baseUrl}/trips`)
        .then((res) => setTrips(res.data.trips))
        .catch((err) => console.log(err));
    };
    getTrips();
  }, [trips]);

  return (
    <div>
      <h1>Página do painel do admin (acesso adm).</h1>
      {/* <button onClick={() => goToLoginPage(history)}>Logout</button> */}
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

export default AdminHomePage;
