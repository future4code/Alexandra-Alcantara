import { LoginDTO, LoginData } from "../../../model/user";

export default class LoginValidation {
  protected loginInputValidation = ({
    email,
    password,
  }: LoginDTO): LoginData => {
    if (!email || !password) {
      throw new Error("Please, fill all fields: 'email' and 'password'.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email :/");
    }

    return { email, password };
  };
}
