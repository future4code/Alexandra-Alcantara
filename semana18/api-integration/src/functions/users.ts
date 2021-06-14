import { connection } from "../services/connection";
import { user, userAddressDb } from "../types";

// Função para criar o usuário
export const createUser = async (
  user: user,
  address: userAddressDb
): Promise<any> => {
  await connection("users_auth_email_pwd").insert(user);

  await connection("users_address").insert(address);
};

// Função para login
export const login = async (
  email: string,
  password: string,
  cep: string,
  numero: string,
  complemento: string
): Promise<any> => {
  await connection("users_auth").insert({
    email,
    password,
    cep,
    numero,
    complemento,
  });
};

// Função para buscar usuário pelo email
export const searchByEmail = async (email: string): Promise<any> => {
  const result = await connection("users_auth")
    .select("*")
    .where("email", "like", `%${email}%`);

  return result[0];
};
