import React, { useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  PostCardContainer,
  AddPostButton,
  Text,
  Title,
  TitleContainer,
} from "./styled";
import {
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { goToAddPost } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";

const PostListPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);
  console.log("Aqui estão os posts", states.posts);

  const postCards =
    states.posts &&
    states.posts.map((post) => {
      return (
        <Box width={"60vw"} border={"1px solid gray"} m={1} borderRadius={10}>
          <CardActionArea key={post.id} onClick={null}>
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
    });

  return (
    <div>
      <Box mt={2} ml={2}>
        <TitleContainer>
          <Typography color={"primary"} variant={"h5"}>
            Popular Posts
          </Typography>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={() => goToAddPost(history)}
          >
            <Add />
          </Button>
        </TitleContainer>
      </Box>
      <PostCardContainer>{postCards}</PostCardContainer>
    </div>
  );
};

export default PostListPage;
