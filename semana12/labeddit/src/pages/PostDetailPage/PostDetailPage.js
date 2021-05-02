import React, { useState, useEffect, useContext } from "react";
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
  Username,
  UsernameContainer,
  VoteButtonDown,
  VoteButtonUp,
  MainContainer,
  Text,
  Title,
  ScreenContainer,
  Line,
  BackgroundCommentContainer,
} from "./styled";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@material-ui/core";
import GlobalStateContext from "../../global/GlobalStateContext";

const PostDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const [post, setPost] = useState({});
  const [isCommenting, setIsCommenting] = useState(false);
  const [count, setCount] = useState(0);
  const { states, setters, requests } = useContext(GlobalStateContext);

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
    <ScreenContainer>
      {post && post.post ? (
        <Box width={"60vw"} m={1} borderRadius={6} boxShadow={3} key={post.id}>
          <UsernameContainer>
            <Username>Postado por {post.post.username}</Username>
          </UsernameContainer>

          <MainContainer>
            <VotesContainer>
              <VoteButtonUp onClick={() => requests.postVote(1, post.post.id)}>
                <FontAwesomeIcon icon={faAngleUp} />
              </VoteButtonUp>
              <div>{post.post.votesCount}</div>
              <VoteButtonDown
                onClick={() => requests.postVote(-1, post.post.id)}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </VoteButtonDown>
            </VotesContainer>
            <Box>
              <Title>{post.post.title}</Title>
              <Text>{post.post.text}</Text>
            </Box>
          </MainContainer>
        </Box>
      ) : (
        <Loading />
      )}

      <AddCommentForm getPost={getPost} />
      <BackgroundCommentContainer>
        {post &&
          post.post &&
          post.post.comments.map((comment) => {
            return (
              <CommentContainer key={comment.id}>
                <Box ml={1} fontSize={"12px"} color={"gray"}>
                  {comment.username}
                </Box>
                <Box ml={2} mt={1} mb={1}>
                  {comment.text}
                </Box>
                <Box ml={1} display={"flex"} alignItems={"center"}>
                  <VoteButtonUp
                    onClick={() => voteComment(1, post.post.id, comment.id)}
                  >
                    <FontAwesomeIcon icon={faAngleUp} />
                  </VoteButtonUp>
                  <Box fontSize={"15px"}>{comment.votesCount}</Box>
                  <VoteButtonDown
                    onClick={() => voteComment(-1, post.post.id, comment.id)}
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </VoteButtonDown>
                </Box>
                <Line />
              </CommentContainer>
            );
          })}
      </BackgroundCommentContainer>
    </ScreenContainer>
  );
};

export default PostDetailPage;
