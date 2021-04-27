import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostListPage = () => {
  useProtectedPage();

  return (
    <div>
      <h1>PostListPage</h1>
    </div>
  );
};

export default PostListPage;
