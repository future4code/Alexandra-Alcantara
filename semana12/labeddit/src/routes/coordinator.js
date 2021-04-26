export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToAddPost = (history) => {
  history.push("/adicionar-post");
};

export const goToPostDetail = (history) => {
  history.push(`/detalhe/${id}`);
};

export const goToPostslist = (history) => {
  history.push("/");
};
