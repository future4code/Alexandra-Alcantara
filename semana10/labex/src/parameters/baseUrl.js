const token = window.localStorage.getItem("token");

export const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alexandra-alcantara-cruz";

export const axiosConfig = {
  headers: {
    auth: token,
  },
};
