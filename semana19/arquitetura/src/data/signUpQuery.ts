import connection from "./connection";
import { user } from "../model/user";

// SIGN UP
export const signUp = async (user: user): Promise<any> => {
  await connection("users").insert(user);
};
