import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";
import { baseUrl } from "../parameters/baseUrl";
import axios from "axios";

const ApplicationFormPage = (props) => {
  const [tripId, setTripId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [motivation, setMotivation] = useState("");
  const history = useHistory();

  const handleTrip = (e) => {
    setTripId(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleProfession = (e) => {
    setProfession(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleMotivation = (e) => {
    setMotivation(e.target.value);
  };

  useEffect(() => {
    const getTrips = () => {
      axios
        .get(`${baseUrl}/trips`)
        .then((res) => setTripId(res.data.trips))
        .catch((err) => console.log(err));
    };
    getTrips();
  }, [tripId]);

  const apply = (id) => {
    const body = {
      id: tripId,
      name: name,
      age: age,
      profession: profession,
      country: country,
      motivation: motivation,
    };
  };

  axios
    .post(`${baseUrl}/trips/apply/apply`)
    .then((res) => {
      console.log(res.data);
      setTripId("");
      setName("");
      setAge("");
      setProfession("");
      setCountry("");
      setMotivation("");
    })
    .catch((err) => {});

  return (
    <div>
      <h1>Página do formulário de candidatura</h1>
      <label>Viagem</label>
      {/* <select value={trip} onChange={handleTrip} />
      <option>{props.trip.id}</option> */}
      <input value={tripId} onChange={handleTrip} />
      <label>Nome</label>
      <input value={name} onChange={handleName} />
      <label>Idade</label>
      <input value={age} onChange={handleAge} />
      <label>Profissão</label>
      <input value={profession} onChange={handleProfession} />
      <label>País</label>
      <input value={country} onChange={handleCountry} />
      <label>Motivação</label>
      <input value={motivation} onChange={handleMotivation} />
      <button onClick={apply}>Inscrever</button>
    </div>
  );
};

export default ApplicationFormPage;
