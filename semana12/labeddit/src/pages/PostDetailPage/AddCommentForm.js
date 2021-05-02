import React, { useState } from "react";
import { InputContainer, CommentButton } from "./styled";
import { TextField, Box, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constants/urls";

const AddCommentForm = (props) => {
  const [form, onChange, clear] = useForm({ text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const createComment = (body, clear, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts/${params.id}/comment`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        clear();
        props.getPost();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err);
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    createComment(form, clear, setIsLoading);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <InputContainer>
        <TextField
          name={"text"}
          value={form.text}
          onChange={onChange}
          label={"O que você deseja comentar?"}
          variant={"outlined"}
          type={"text"}
          multiline={true}
          rows={"3"}
          margin={"dense"}
          required
          fullWidth
        />
        <Box>
          <CommentButton type={"submit"}>
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Enviar</>
            )}
          </CommentButton>
        </Box>
      </InputContainer>
    </form>
  );
};

export default AddCommentForm;
