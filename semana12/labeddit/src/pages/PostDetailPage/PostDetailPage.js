import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constants/urls";
import Loading from "../../components/Loading/Loading";
import AddCommentForm from "./AddCommentForm";
import { CommentContainer, PostContainer } from "./styled";
import axios from "axios";

const PostDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const response = await axios.get(`${BASE_URL}/posts/${params.id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setPost(response.data);
  };

  return (
    <PostContainer>
      {post && post.post ? (
        <>
          <h1>{post.post.title}</h1>
          <p>{post.post.text}</p>
        </>
      ) : (
        <Loading />
      )}
      <p>Comentários</p>
      <AddCommentForm getPost={getPost} />
      {post &&
        post.post &&
        post.post.comments.map((comment) => {
          return (
            <CommentContainer key={comment.id}>
              {comment.text} ({comment.username})
            </CommentContainer>
          );
        })}
    </PostContainer>
  );
};

export default PostDetailPage;
