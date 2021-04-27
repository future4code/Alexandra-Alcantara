import React, { useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PostCardContainer, Title, Text } from "./styled";
import { CardActionArea, CardMedia, Typography, Box } from "@material-ui/core";

const PostListPage = () => {
  useProtectedPage();
  const { states } = useContext(GlobalStateContext);
  console.log("Aqui estão os posts", states.posts);

  const postCards =
    states.posts &&
    states.posts.map((post) => {
      return (
        <CardActionArea key={post.id}>
          <Box m={2}>
            <Typography color={"primary"} variant={"h6"}>
              {post.title}
            </Typography>
          </Box>
          <Text>{post.text}</Text>
        </CardActionArea>
        // <PostCard key={post.id} title={states.title} text={states.text} />
      );
    });

  return (
    <div>
      <Box mt={2} ml={2}>
        <Typography color={"primary"} variant={"h5"}>
          Popular Posts
        </Typography>
      </Box>
      {postCards}
    </div>
  );
};

export default PostListPage;
