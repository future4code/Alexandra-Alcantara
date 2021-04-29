import React, { useState, useEffect, useContext } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import BASE_URL from "../constants/urls";
import { useParams } from "react-router-dom";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);
  // const [comment, setComment] = useState([]);
  // const params = useParams();

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  // const createComment = (body, clear, setIsLoading) => {
  //   setIsLoading(true);

  //   axios
  //     .post(`${BASE_URL}/posts/${params.id}/comment`, body, {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
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

  const states = { posts };
  const setters = { setPosts };
  const requests = { getPosts };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
