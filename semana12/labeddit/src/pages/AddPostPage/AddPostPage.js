import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddPostsForm from "./AddPostsForm";
import { ScreenContainer } from "./styled";

const AddPostPage = () => {
  useProtectedPage();

  return (
    <ScreenContainer>
      <p>Criar Posts</p>
      <AddPostsForm />
    </ScreenContainer>
  );
};

export default AddPostPage;
