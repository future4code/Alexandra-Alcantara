import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../parameters/baseUrl";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password,
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
      });
  };

  return (
    <div>
      <h1>Página de login do adm</h1>
      <label>Email</label>
      <input value={email} onChange={handleEmail} />
      <label>Senha</label>
      <input valu={password} onChange={handlePassword} />
      <button onClick={login}>Entrar</button>
    </div>
  );
};

export default LoginPage;
