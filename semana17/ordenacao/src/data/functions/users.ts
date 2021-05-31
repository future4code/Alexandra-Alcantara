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

// PESQUISAR USUÁRIO PELO TIPO OU NOME E TRAZER DE FORMA ORDENADA (DESC/ASC)
export const searchUserOrdered = async (
  orderBy: string,
  orderType: string
): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy(`${orderBy}`, `${orderType.toUpperCase()}`);
  return result;
};
