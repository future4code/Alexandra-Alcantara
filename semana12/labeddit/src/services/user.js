import BASE_URL from "../constants/urls";
import axios from "axios";
import { goToPostsList, goToLogin } from "../routes/coordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/labEddit/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Usuário logado com sucesso!");
      clear();
      goToPostsList(history);
    })
    .catch((err) => {
      alert("Erro no login");
      console.log(err);
    });
};

export const signup = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/labEddit/signup`, body)
    .then((res) => {
      alert("Usuário cadastrado com sucesso!");
      console.log(res);
      clear();
      goToLogin(history);
    })
    .catch((err) => {
      alert("Erro no cadastro");
      console.log(err);
    });
};
