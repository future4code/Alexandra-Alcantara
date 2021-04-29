import React, { useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
// import PostCard from "../../components/PostCard/PostCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PostCardContainer, Text, TitleContainer } from "./styled";
import { CardActionArea, Typography, Box, Button } from "@material-ui/core";
import { goToPostDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";
import Loading from "../../components/Loading/Loading";
import AddPostsForm from "./AddPostsForm";

const PostListPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);

  const onClickCard = (id) => {
    goToPostDetail(history, id);
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
