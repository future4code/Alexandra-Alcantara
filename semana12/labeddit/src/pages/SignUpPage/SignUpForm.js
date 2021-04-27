import React from "react";
import { InputContainer } from "./styled";
import { TextField, Button, Box } from "@material-ui/core";
import useForm from "../../hooks/useForm";

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const onSubmitForm = (e) => {
    console.log(form);
    e.preventDefault();
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"Nome"}
          margin={"dense"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

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
            fullWidth
          >
            Cadastrar
          </Button>
        </Box>
      </form>
    </InputContainer>
  );
};

export default SignUpForm;
