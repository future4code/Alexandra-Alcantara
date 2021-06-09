import { getTokenData } from "../services/authenticator";
import { connection } from "../services/connection";
import { user } from "../types/user";

// Função para criar o usuário
export const createUser = async (userData: user): Promise<any> => {
  await connection("users_auth_email_pwd").insert(userData);
};

// Função para login
export const login = async (email: string, password: string): Promise<any> => {
  await connection("users_auth").insert({
    email,
    password,
  });
};

// Função para buscar usuário pelo email
export const searchByEmail = async (email: string): Promise<any> => {
  const result = await connection("users_auth")
    .select("*")
    .where("email", "like", `%${email}%`);

  return result[0];
};

// Função para deletar usuários
export const deleteUser = async (id: string): Promise<any> => {
  await connection("users_auth_email_pwd").delete().where("id", `${id}`);
};
