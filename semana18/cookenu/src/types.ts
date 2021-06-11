export type authenticationData = {
  id: string;
};

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type recipe = {
  id: string;
  title: string;
  description: string;
  user_id: string;
};
