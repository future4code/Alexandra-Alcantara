import { signUpInputDTO, userData, USER_ROLES } from "../../../model/user";

export const signUpInputValidation = (input: signUpInputDTO): userData => {
  if (
    !input.name ||
    !input.nickname ||
    !input.email ||
    !input.password ||
    !input.role
  ) {
    throw new Error(
      "Fill all fields: 'name','nickname', 'email' and 'password'"
    );
  }

  if (typeof input.name !== "string") {
    throw new Error("name needs to be string");
  }

  if (typeof input.nickname !== "string") {
    throw new Error("nickname needs to be string");
  }

  if (typeof input.email !== "string") {
    throw new Error("email needs to be string");
  }

  if (typeof input.password !== "string") {
    throw new Error("password needs to be string");
  }

  if (!(input.role in USER_ROLES)) {
    throw new Error("role can be only 'ADMIN' or 'NORMAL'");
  }

  return {
    email: input.email,
    name: input.name,
    nickname: input.nickname,
    password: input.password,
    role: USER_ROLES[input.role as USER_ROLES],
  };
};
