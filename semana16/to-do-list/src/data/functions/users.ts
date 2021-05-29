import { connection } from "../connection";

// Função do endpoint 1
export const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
              SELECT id, nickname FROM ToDoListUser 
              WHERE id = '${id}'
          `);
  return result[0][0];
};

// Função do endpoint 2
export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection.raw(`
    INSERT INTO ToDoListUser (name, nickname, email)
    VALUES(
        "${name}",
        "${nickname}",
        "${email}"
    )
`);
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
