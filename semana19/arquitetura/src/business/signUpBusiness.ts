import connection from "../data/connection";
import { userData } from "../model/user";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user, USER_ROLES } from "../model/user";
import { signUp } from "../data/signUpQuery";

export const signUpBusiness = async (userData: userData): Promise<any> => {
  if (
    !userData.name ||
    !userData.email ||
    !userData.password ||
    !userData.role
  ) {
    throw new Error(
      "Please, fill all fields: 'name', 'email', 'password' and 'role'."
    );
  }

  if (!(userData.role in USER_ROLES)) {
    throw new Error("Role must be NORMAL or ADMIN.");
  }

  if (!userData.email.includes("@")) {
    throw new Error("Invalid email :/");
  }

  if (userData.password.length < 6) {
    throw new Error("Password must have at least 6 characters");
  }

  const [user] = await connection("users").where("email", userData.email);

  if (user) {
    throw new Error("Email já está cadastrado!");
  }

  const cypherPassword = generateHash(userData.password);

  const newUser: user = {
    ...userData,
    id: generateId(),
    password: cypherPassword,
  };

  await signUp(newUser);

  const token: string = generateToken({
    id: newUser.id,
    role: userData.role,
  });

  return token;
};
