import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constants/urls";
import Loading from "../../components/Loading/Loading";
import AddCommentForm from "./AddCommentForm";
import {
  CommentContainer,
  PostContainer,
  VotesContainer,
  VoteButton,
} from "./styled";
import axios from "axios";
import { TramRounded } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from "@fortawesome/free-solid-svg-icons";

const PostDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const [post, setPost] = useState({});
  const [isCommenting, setIsCommenting] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getPost();
  }, [count]);

  const getPost = async () => {
    const response = await axios.get(`${BASE_URL}/posts/${params.id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setPost(response.data);
  };

  const voteComment = (userVote, postId, commentId) => {
    const body = {
      direction: userVote,
    };
    axios
      .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {
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

  return (
    <PostContainer>
      {post && post.post ? (
        <>
          <h1>{post.post.title}</h1>
          <p>{post.post.text}</p>
          <p>Id do Post: {post.post.id}</p>
        </>
      ) : (
        <Loading />
      )}
      <button onClick={() => setIsCommenting(true)}>Comentar</button>
      {isCommenting ? <AddCommentForm getPost={getPost} /> : null}
      {post &&
        post.post &&
        post.post.comments.map((comment) => {
          return (
            <CommentContainer key={comment.id}>
              {comment.text} ({comment.username})
              <VotesContainer>
                <VoteButton
                  onClick={() => voteComment(1, post.post.id, comment.id)}
                >
                  <FontAwesomeIcon size={"2x"} icon={faLongArrowAltUp} />
                </VoteButton>
                <div>{comment.votesCount}</div>
                <VoteButton
                  onClick={() => voteComment(-1, post.post.id, comment.id)}
                >
                  <FontAwesomeIcon size={"2x"} icon={faLongArrowAltDown} />
                </VoteButton>
              </VotesContainer>
            </CommentContainer>
          );
        })}
    </PostContainer>
  );
};

export default PostDetailPage;
