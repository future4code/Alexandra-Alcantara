export type authenticationData = {
  id: string;
  role: string;
};

export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type recipe = {
  id: string;
  title: string;
  description: string;
  user_id: string;
};

export type follow = {
  followed_id: string;
  follower_id: string;
};

export type feedData = {
  id: string;
  title: string;
  description: string;
  user_id: string;
  name: string;
  created_at: Date;
};
