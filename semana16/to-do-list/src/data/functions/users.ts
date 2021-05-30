import { connection } from "../connection";

// Função do endpoint 1 [CRIAR USUÁRIO]
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

// Função do endpoint 2 [BUSCAR USUÁRIO PELO ID]
export const getUserById = async (id: string): Promise<any> => {
  const result = await connection("ToDoListUser")
    .select("id", "nickname")
    .where("id", `${id}`);

  return result[0];
};

// Função do endpoint 3 [EDITAR USUÁRIO]
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

// Função do endpoint 6 [BUSCAR TODOS OS USUÁRIOS]
export const getAllUsers = async (): Promise<any> => {
  const result = await connection("ToDoListUser").select("id", "nickname");
  return result;
};
