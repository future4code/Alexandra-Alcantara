import React, { useState } from "react";
import { InputContainer, FormTextContainer, PostButton } from "./styled";
import { TextField, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/post";

const AddPostsForm = () => {
  const [form, onChange, clear] = useForm({ title: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    createPost(form, clear, setIsLoading);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <InputContainer>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título do seu post"}
          variant={"outlined"}
          margin={"dense"}
          type={"text"}
          multiline={true}
          rowsMax={"3"}
          required
          fullWidth
        />
        <FormTextContainer>
          <TextField
            name={"text"}
            value={form.text}
            onChange={onChange}
            label={"O que há para postar hoje?"}
            margin={"dense"}
            variant={"outlined"}
            type={"text"}
            required
            rows={"4"}
            multiline={true}
            fullWidth
          />
        </FormTextContainer>
        <PostButton type={"submit"}>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Postar</>
          )}
        </PostButton>
      </InputContainer>
    </form>
  );
};

export default AddPostsForm;
