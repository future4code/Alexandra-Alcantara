import BASE_URL from "../constants/urls";
import axios from "axios";
import { goToPostsList } from "../routes/coordinator";

export const login = (body, clear, history, setAccessButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToPostsList(history);
      setAccessButton("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const signup = (body, clear, history, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Usuário cadastrado com sucesso!");
      clear();
      setIsLoading(false);
      goToPostsList(history);
    })
    .catch((err) => {
      setIsLoading(false);
      alert("Algo deu errado, tente novamente.");
    });
};
