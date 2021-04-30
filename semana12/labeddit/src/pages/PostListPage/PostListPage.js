import React, { useContext, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  PostCardContainer,
  Text,
  TitleContainer,
  VoteButton,
  VotesContainer,
} from "./styled";
import { CardActionArea, Typography, Box, Button } from "@material-ui/core";
import { goToPostDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import AddPostsForm from "./AddPostsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from "@fortawesome/free-solid-svg-icons";
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
            border={"1px solid gray"}
            m={1}
            borderRadius={10}
            key={post.id}
          >
            <CardActionArea onClick={() => onClickCard(post.id)}>
              <Box m={2}>
                <Typography color={"primary"} variant={"h6"}>
                  {post.title}
                </Typography>
              </Box>
              <Box>
                <Text>{post.text}</Text>
              </Box>
            </CardActionArea>
            <VotesContainer>
              <VoteButton onClick={() => postVote(1, post.id)}>
                <FontAwesomeIcon size={"2x"} icon={faLongArrowAltUp} />
              </VoteButton>
              <div>{post.votesCount}</div>
              <VoteButton onClick={() => postVote(-1, post.id)}>
                <FontAwesomeIcon size={"2x"} icon={faLongArrowAltDown} />
              </VoteButton>
            </VotesContainer>
          </Box>
          // <PostCard key={post.id} title={states.title} text={states.text} />
        );
      })
    ) : (
      <Loading />
    );

  return (
    <div>
      <Box mt={2} ml={2}>
        <TitleContainer>
          {/* <Button
            color={"primary"}
            variant={"contained"}
            onClick={() => goToAddPost(history)}
          >
            <Add />
          </Button> */}
          <AddPostsForm />
        </TitleContainer>
      </Box>
      <PostCardContainer>{postCards}</PostCardContainer>
    </div>
  );
};

export default PostListPage;
