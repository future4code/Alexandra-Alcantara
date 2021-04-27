import BASE_URL from "../constants/urls";
import axios from "axios";

export const login = (body, clear) => {
  axios
    .post(`${BASE_URL}/labEddit/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Usuário logado com sucesso!");
      clear();
    })
    .catch((err) => {
      alert("Erro no login");
      console.log(err);
    });
};

export const signup = (body, clear) => {
  axios
    .post(`${BASE_URL}/labEddit/signup`, body)
    .then((res) => {
      alert("Usuário cadastrado com sucesso!");
      console.log(res);
      clear();
    })
    .catch((err) => {
      alert("Erro no cadastro");
      console.log(err);
    });
};
