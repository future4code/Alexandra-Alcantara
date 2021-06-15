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
