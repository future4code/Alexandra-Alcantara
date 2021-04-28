import React, { useState } from "react";
import { InputContainer } from "./styled";
import { TextField, Button, Box, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { createPost } from "../../services/post";

const AddPostsForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ title: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    createPost(form, clear, setIsLoading);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título"}
          variant={"outlined"}
          margin={"dense"}
          type={"text"}
          required
          fullWidth
          color={"black"}
        />

        <TextField
          name={"text"}
          value={form.text}
          onChange={onChange}
          label={"Texto"}
          margin={"dense"}
          variant={"outlined"}
          type={"text"}
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
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Criar Post</>
            )}
          </Button>
        </Box>
      </form>
    </InputContainer>
  );
};

export default AddPostsForm;
