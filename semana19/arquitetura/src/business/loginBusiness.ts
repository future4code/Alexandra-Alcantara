import { login } from "../data/loginQuery";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export const loginBusiness = async (
  email: string,
  password: string
): Promise<any> => {
  if (!email || !password) {
    throw new Error("Please, fill all fields: email and password.");
  }

  if (!email.includes("@")) {
    throw new Error("Invalid email :/");
  }

  const user = await login(email);

  if (!user) {
    throw new Error("User not found :/");
  }

  const passwordIsCorrect: boolean = compareHash(password, user.password);

  if (!passwordIsCorrect) {
    throw new Error("Invalid credentials :/");
  }

  const token: string = generateToken({
    id: user.id,
    role: user.role,
  });

  return token;
};
