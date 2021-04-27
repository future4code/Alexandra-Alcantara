import React from "react";
import { Switch, Route } from "react-router-dom";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import PostListPage from "../pages/PostListPage/PostListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = ({ accessButton, setAccessButton }) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage
          accessButton={accessButton}
          setAccessButton={setAccessButton}
        />
      </Route>

      <Route exact path="/cadastro">
        <SignUpPage />
      </Route>

      <Route exact path="/">
        <PostListPage />
      </Route>

      <Route exact path="/adicionar-post">
        <AddPostPage />
      </Route>

      <Route exact path="/detalhe/:id">
        <PostDetailPage />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
