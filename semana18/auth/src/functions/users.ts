import { connection } from "../service/connection";

// Função para criar o usuário
export const createUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string,
  password: string
): Promise<any> => {
  await connection("users_auth").insert({
    id,
    name,
    nickname,
    email,
    password,
  });
};
