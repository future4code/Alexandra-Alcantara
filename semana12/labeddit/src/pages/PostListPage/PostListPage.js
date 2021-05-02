import React, { useContext, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  PostCardContainer,
  Text,
  VoteButtonUp,
  VoteButtonDown,
  VotesContainer,
  MainContainer,
  Username,
  Title,
  UsernameContainer,
  PostingButton,
} from "./styled";
import { CardActionArea, Box } from "@material-ui/core";
import { goToPostDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import AddPostsForm from "./AddPostsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const PostListPage = (props) => {
  useProtectedPage();
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [isPosting, setIsPosting] = useState(false);

  const onClickCard = (id) => {
    goToPostDetail(history, id);
  };

  const postCards =
    states.posts.length > 0 ? (
      states.posts.map((post) => {
        return (
          <Box
            width={"60vw"}
            m={1}
            borderRadius={6}
            boxShadow={3}
            key={post.id}
          >
            <UsernameContainer>
              <Username>Postado por {post.username}</Username>
            </UsernameContainer>
            <MainContainer>
              <VotesContainer>
                <VoteButtonUp onClick={() => requests.postVote(1, post.id)}>
                  <FontAwesomeIcon icon={faAngleUp} />
                </VoteButtonUp>
                <div>{post.votesCount}</div>
                <VoteButtonDown onClick={() => requests.postVote(-1, post.id)}>
                  <FontAwesomeIcon icon={faAngleDown} />
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
      <PostingButton onClick={() => setIsPosting(true)}>
        Quero postar!
      </PostingButton>
      {isPosting ? <AddPostsForm /> : null}
      <PostCardContainer>{postCards}</PostCardContainer>
    </div>
  );
};

export default PostListPage;
