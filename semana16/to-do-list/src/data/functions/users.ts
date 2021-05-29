import { connection } from "../connection";

export const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
              SELECT id, nickname FROM ToDoListUser WHERE id = '${id}'
          `);
  return result[0][0];
};

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  const result = await connection.raw(`
    INSERT INTO ToDoListUser (name, nickname, email)
    VALUES(
        "${name}",
        "${nickname}",
        "${email}"
    )
`);
};
