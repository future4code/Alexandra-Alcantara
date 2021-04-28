import BASE_URL from "../constants/urls";
import axios from "axios";
import { goToPostsList, goToLogin } from "../routes/coordinator";

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
      alert("Usuário cadastrado com sucesso!");
      console.log(res);
      clear();
      setIsLoading(false);
      goToLogin(history);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
