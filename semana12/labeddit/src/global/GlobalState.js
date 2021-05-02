import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import BASE_URL from "../constants/urls";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

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

  const postVote = (userVote, id) => {
    const body = {
      direction: userVote,
    };
    axios
      .put(`${BASE_URL}/posts/${id}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCount(res.data);
        console.log(count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   postVote();
  // }, []);

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

  const states = { posts, count };
  const setters = { setPosts, setCount };
  const requests = { getPosts, postVote };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
