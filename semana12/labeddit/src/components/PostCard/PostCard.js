import React, { useContext } from "react";
import { CardActionArea, CardMedia, Typography } from "@material-ui/core";
import { PostCardContainer } from "./styled";
import GlobalStateContext from "../../global/GlobalState";

const PostCard = (props) => {
  const { states, setters } = useContext(GlobalStateContext);

  return (
    <PostCardContainer>
      <CardActionArea>
        <CardMedia>
          <Typography>{states.posts.title.toUpperCase()}</Typography>
          <Typography>{states.posts.text.toUpperCase()}</Typography>
        </CardMedia>
      </CardActionArea>
    </PostCardContainer>
  );
};

export default PostCard;
