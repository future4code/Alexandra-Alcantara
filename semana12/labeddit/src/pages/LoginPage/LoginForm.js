import React from "react";
import { InputContainer } from "./styled";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const onSubmitForm = (e) => {
    e.preventDefault();
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

        <Button
          type={"submit"}
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          fullWidth
        >
          Login
        </Button>
      </form>
    </InputContainer>
  );
};

export default LoginForm;
