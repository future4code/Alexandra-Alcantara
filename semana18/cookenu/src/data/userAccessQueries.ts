import connection from "./connection";
import { user } from "../types/user";

// REGISTER
export const createUser = async (user: user): Promise<any> => {
  await connection("users").insert(user);
};

// LOGIN
export const login = async (email: string, password: string): Promise<any> => {
  const result = await connection("users")
    .select("*")
    .where("email", `${email}`);

  return result[0];
};

// RESET PASSWORD
export const resetPassword = async (
  newHash: string,
  email: string
): Promise<void> => {
  await connection("users").update("password", newHash).where("email", email);
};
