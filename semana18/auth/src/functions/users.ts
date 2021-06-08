import { connection } from "../services/connection";

// Função para criar o usuário
export const createUser = async (
  id: string,
  /*name: string,
  nickname: string,*/
  email: string,
  password: string
): Promise<any> => {
  await connection("users_auth_email_pwd").insert({
    id,
    /*name,
    nickname,*/
    email,
    password,
  });
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
