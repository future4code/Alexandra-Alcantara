import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { axiosConfig, baseUrl } from "../parameters/baseUrl";

const initialForm = {
  name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",
};

const CreateTripPage = () => {
  const [trip, setTrip] = useState([]);
  const [form, onChange, resetForm] = useForm(initialForm);
  const history = useHistory();

  const createTrip = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
    const token = window.localStorage.getItem("token");

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(`${baseUrl}/trips`, body, axiosConfig)
      .then((res) => {
        console.log(res.data);
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        alert("Ops, algo deu errado!");
      });
  };

  return (
    <div>
      <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
      <h1>Página para criar viagens (acesso adm).</h1>
      <form onSubmit={createTrip}>
        <label>
          Nome
          <input name="name" value={form.name} onChange={onChange} />
        </label>
        <label>
          Escolha um planeta
          <select name="planet" value={form.planet} onChange={onChange}>
            <option></option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
            <option>Plutão</option>
          </select>
        </label>
        <label>
          Descrição
          <input
            name="description"
            value={form.description}
            onChange={onChange}
          />
        </label>
        <label>
          Data da viagem
          <input
            name="date"
            value={form.date}
            type="date"
            onChange={onChange}
          />
        </label>
        <label>
          Duração
          <input
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
          />
        </label>
        <button>Criar</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
