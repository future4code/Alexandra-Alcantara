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

export type userData = Omit<user, "id">;

export type authenticationData = {
  id: string;
  role: string;
};
