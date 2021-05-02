import React, { useState, useEffect } from "react";
import { InputContainer, CommentButton } from "./styled";
import { TextField, Button, Box, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constants/urls";
import isLoading from "../../components/Loading/Loading";

const AddCommentForm = (props) => {
  const [form, onChange, clear] = useForm({ text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const [comments, setComments] = useState({});

  const createComment = (body, clear, setIsLoading) => {
    // setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts/${params.id}/comment`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        clear();
        props.getPost();
        // setComments(res);
        setIsLoading(false);
      })
      .catch((err) => {
        // setIsLoading(false);
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
          multiline={"true"}
          rows={"3"}
          margin={"dense"}
          required
          fullWidth
        />
        <Box mt={1}>
          <CommentButton
            type={"submit"}
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
            fullWidth
          >
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
