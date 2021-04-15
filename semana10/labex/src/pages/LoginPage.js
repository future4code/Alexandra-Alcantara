import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../parameters/baseUrl";
import { useForm } from "../hooks/useForm";

const initialForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Ops, algo deu errado! Verifique se o e-mail e senha digitados estão corretos e tente novamente."
        );
      });
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <label>
          E-mail
          <input
            required
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </label>
        <label>
          Senha
          <input
            required
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            // pattern=""
          />
        </label>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
