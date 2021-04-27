import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddPostPage = () => {
  useProtectedPage();

  return (
    <div>
      <h1>AddPostPage</h1>
    </div>
  );
};

export default AddPostPage;
