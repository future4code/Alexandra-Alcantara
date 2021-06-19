import { UserData, UserDTO } from "../../../model/user";

export default class SignUpValidation {
  protected signUpInputValidation = ({
    name,
    email,
    password,
  }: UserDTO): UserData => {
    if (!name || !email || !password) {
      throw new Error(
        "Please, fill all fields: 'name', 'email' and 'password'."
      );
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email :/");
    }

    if (password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }

    return { name, email, password };
  };
}
