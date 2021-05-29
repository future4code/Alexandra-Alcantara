import { connection } from "../connection";

// Função do endpoint 1
export const getUserById = async (id: string): Promise<any> => {
  const result = await connection("ToDoListUser")
    .select("id", "nickname")
    .where("id", `${id}`);

  return result[0];
};

// Função do endpoint 2
export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection("ToDoListUser").insert({
    name,
    nickname,
    email,
  });
};

// Função do endpoint 3
export const editUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection("ToDoListUser")
    .update({
      name: name,
      nickname: nickname,
      email: email,
    })
    .where("id", id);
};

// Função do endpoint 4
