import React, { useContext, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  PostCardContainer,
  Text,
  TitleContainer,
  VoteButtonUp,
  VoteButtonDown,
  VotesContainer,
  MainContainer,
  Line,
  Username,
  Title,
  UsernameContainer,
} from "./styled";
import { CardActionArea, Typography, Box } from "@material-ui/core";
import { goToPostDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import AddPostsForm from "./AddPostsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import BASE_URL from "../../constants/urls";
import { useParams } from "react-router-dom";

const PostListPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);
  const [count, setCount] = useState(0);
  const params = useParams();

  const onClickCard = (id) => {
    goToPostDetail(history, id);
  };

  // const postVote = async (userVote, id) => {
  //   const body = {
  //     direction: userVote,
  //   };
  //   const response = await axios.put(`${BASE_URL}/posts/${id}/vote`, body);
  // };

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

  const postCards =
    states.posts.length > 0 ? (
      states.posts.map((post) => {
        return (
          <Box
            width={"60vw"}
            border={"1px solid lightgray"}
            m={1}
            borderRadius={6}
            boxShadow={3}
            key={post.id}
          >
            <UsernameContainer>
              <Username>Postado por {post.username}</Username>
            </UsernameContainer>
            <Line />
            <MainContainer>
              <VotesContainer>
                <VoteButtonUp onClick={() => postVote(1, post.id)}>
                  <FontAwesomeIcon size={"2x"} icon={faAngleUp} />
                </VoteButtonUp>
                <div>{post.votesCount}</div>
                <VoteButtonDown onClick={() => postVote(-1, post.id)}>
                  <FontAwesomeIcon size={"2x"} icon={faAngleDown} />
                </VoteButtonDown>
              </VotesContainer>
              <CardActionArea onClick={() => onClickCard(post.id)}>
                <Box ml={2}>
                  <Title>{post.title}</Title>
                  <Text>{post.text}</Text>
                </Box>
              </CardActionArea>
            </MainContainer>
          </Box>
        );
      })
    ) : (
      <Loading />
    );

  return (
    <div>
      <Box mt={2} ml={2}>
        <TitleContainer>
          <AddPostsForm />
        </TitleContainer>
      </Box>
      <PostCardContainer>{postCards}</PostCardContainer>
    </div>
  );
};

export default PostListPage;
