import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../constants/urls";
import { useParams } from "react-router-dom";

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Post criado com sucesso!");
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.message);
    });
};

// export const createComment = (body, clear, setIsLoading) => {
//   const params = useParams();
//   setIsLoading(true);
//   const [comment, setComment] = useState([]);

//   axios
//     .post(`${BASE_URL}/posts/${params.id}/comment`, body, {
//       headers: {
//         Authorization: localStorage.getItem("token"),
//       },
//     })
//     .then((res) => {
//       alert("Post criado com sucesso!");
//       clear();
//       setIsLoading(false);
//     })
//     .catch((err) => {
//       setIsLoading(false);
//       alert(err.response.message);
//     });
// };

// useEffect(() => {
//   createComment();
// }, [comment]);
