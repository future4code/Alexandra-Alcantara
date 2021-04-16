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
    getTrips();
  }, []);

  const getTrips = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get(`${baseUrl}/trips`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => setTrips(res.data.trips))
      .catch((err) => console.log(err));
  };

  const deleteTrip = async (id) => {
    const token = window.localStorage.getItem("token");
    try {
      const res = await axios.delete(`${baseUrl}/trips/${id}`, {
        headers: {
          auth: token,
        },
      });
      alert("Viagem removida com sucesso!");
      console.log(res.data);
    } catch (err) {
      console.log(err.data);
      alert("Ops, algo deu errado!");
    }
  };

  return (
    <div>
      <h1>Página do painel do admin (acesso adm).</h1>
      <button onClick={() => goToCreateTripPage(history)}>+ Viagem</button>
      {/* <button onClick={() => goToLoginPage(history)}>Logout</button> */}
      {trips.map((trip) => {
        return (
          <div>
            <p>{trip.name}</p>
            <button onClick={() => deleteTrip(trip.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default AdminHomePage;
