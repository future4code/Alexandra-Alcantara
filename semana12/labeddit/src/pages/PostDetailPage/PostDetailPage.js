import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constants/urls";
import Loading from "../../components/Loading/Loading";

const PostDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const post = useRequestData({}, `${BASE_URL}/posts/${params.id}`);
  console.log(post);

  return (
    <div>
      {post && post.post ? (
        <>
          <h1>{post.post.title}</h1>
          <p>{post.post.text}</p>
        </>
      ) : (
        <Loading />
      )}
      <p>Comentários</p>
      {post &&
        post.post &&
        post.post.comments.map((comment) => {
          return <div key={comment.id}>{comment.text}</div>;
        })}
    </div>
  );
};

export default PostDetailPage;
