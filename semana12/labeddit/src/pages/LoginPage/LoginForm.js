import React from "react";
import { InputContainer } from "./styled";
import { TextField, Button, Box } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import BASE_URL from "../../constants/urls";
import axios from "axios";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const onSubmitForm = (e) => {
    e.preventDefault();
    login();
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/labEddit/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
      })
      .catch((err) => alert("Erro no login"));
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          margin={"dense"}
          variant={"outlined"}
          type={"email"}
          required
          fullWidth
        />

        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"password"}
          variant={"outlined"}
          margin={"dense"}
          type={"password"}
          required
          fullWidth
        />
        <Box mt={1}>
          <Button
            type={"submit"}
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
            fullWidth
          >
            Login
          </Button>
        </Box>
      </form>
    </InputContainer>
  );
};

export default LoginForm;
