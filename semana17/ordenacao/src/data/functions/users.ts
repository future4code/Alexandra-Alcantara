import { connection } from "../connection";

// PESQUISAR USUÁRIO PELO NOME
export const searchUserByName = async (name: string): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${name}%`);
  return result;
};

// PESQUISAR USUÁRIO PELO TIPO
export const searchUserByType = async (type: string): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("type", "like", `%${type}%`);
  return result;
};
