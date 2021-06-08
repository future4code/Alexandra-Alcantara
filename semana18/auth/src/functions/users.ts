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
  await connection("users_auth_email_pwd").insert({
    email,
    password,
  });
};
