export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type authenticationData = {
  id: string;
  role: USER_ROLES;
};

export type userData = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export type user = signUpInputDTO & { id: string };

export type signUpInputDTO = {
  name: any;
  nickname: any;
  email: any;
  password: any;
  role: USER_ROLES;
};

export type loginInputAccessDTO = {
  email: any;
  password: any;
};

export type loginData = {
  email: string;
  password: string;
};
