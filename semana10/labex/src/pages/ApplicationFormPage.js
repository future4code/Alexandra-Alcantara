import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";
import { baseUrl } from "../parameters/baseUrl";
import axios from "axios";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  age: "",
  applicationText: "",
  profession: "",
  country: "",
  id: "",
};

const ApplicationFormPage = (props) => {
  const [trips, setTrips] = useState([]);
  const [form, onChange, resetForm] = useForm(initialForm);
  const history = useHistory();

  const apply = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();

    const body = {
      name: form.name,
      age: form.age,
      profession: form.profession,
      country: form.country,
      applicationText: form.applicationText,
    };
    axios
      .post(`${baseUrl}/trips/${form.id}/apply`, body)
      .then((res) => {
        console.log(res.data);
        alert("Inscrição realizada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        alert("Ops, algo deu errado! Candidatura não realizada.");
      });
  };

  useEffect(() => {
    const getTrips = () => {
      axios
        .get(`${baseUrl}/trips`)
        .then((res) => {
          setTrips(res.data.trips);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    getTrips();
  }, []);

  return (
    <div>
      <h1>Página do formulário de candidatura</h1>
      <form onSubmit={apply}>
        <label>
          Viagem
          <select required name="id" value={form.id} onChange={onChange}>
            <option selected>Selecione uma viagem</option>
            {trips.map((trip) => {
              return (
                <option value={trip.id}>
                  {trip.name} | {trip.planet}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Nome
          <input required name="name" value={form.name} onChange={onChange} />
        </label>
        <label>
          Idade
          <input required name="age" value={form.age} onChange={onChange} />
        </label>
        <label>
          Profissão
          <input
            required
            name="profession"
            value={form.profession}
            onChange={onChange}
          />
        </label>
        <label>
          País
          <input
            required
            name="country"
            value={form.country}
            onChange={onChange}
          />
        </label>
        <label>
          Motivação
          <input
            required
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
          />
        </label>
        <button>Inscrever</button>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
