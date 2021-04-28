import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import BASE_URL from "../constants/urls";
import { useParams } from "react-router-dom";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);

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
        alert("Erro! Tente novamente.");
      });
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

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
