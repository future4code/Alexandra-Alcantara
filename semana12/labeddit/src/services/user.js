import BASE_URL from "../constants/urls";
import axios from "axios";
import { goToPostsList, goToLogin } from "../routes/coordinator";

export const login = (body, clear, history, setAccessButton) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPostsList(history);
      clear();
      setAccessButton("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.log(err);
    });
};

export const signup = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      alert("Usuário cadastrado com sucesso!");
      console.log(res);
      clear();
      goToLogin(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.log(err);
    });
};
