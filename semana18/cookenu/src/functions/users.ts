import { getTokenData } from "../services/authenticator";
import { connection } from "../services/connection";
import { recipe, user } from "../types";

// Função para criar o usuário
export const createUser = async (user: user): Promise<any> => {
  await connection("users").insert(user);
};

// Função para buscar usuário pelo id
export const searchUserById = async (id: string): Promise<any> => {
  const result = await connection("users")
    .select("id", "name", "email")
    .where("id", `${id}`);

  return result[0];
};
