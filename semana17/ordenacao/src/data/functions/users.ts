import { connection } from "../connection";

// GET USER BY NAME
export const searchUserByName = async (name: string): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${name}%`);
  return result;
};

// GET USER BY TYPE
export const searchUserByType = async (type: string): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("type", "like", `%${type}%`);
  return result;
};

// GET ORDERED USERS (DESC/ASC)
export const searchUserOrdered = async (
  orderBy: string,
  orderType: string
): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy(`${orderBy}`, `${orderType.toUpperCase()}`);
  return result;
};

// GET 5 USERS PER PAGE AND ALLOW THE USER TO GO TO THE NEXT PAGE
export const searchUser = async (page: number): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .limit(5)
    .offset(5 * (page - 1));

  return result;
};

// GET USER BY NAME, TYPE, ORDERED, 5 PER PAGE AND ALLOWING USER TO GO TO THE NEXT PAGE
export const generalSearch = async (
  name: string,
  type: string,
  page: number,
  orderBy: string,
  orderType: string
): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${name}%`)
    .orWhere("type", "like", `%${type}%`)
    .orderBy(`${orderBy}`, `${orderType.toUpperCase()}`)
    .limit(5)
    .offset(5 * (page - 1));

  return result;
};
