import { connection } from "../connection";

export const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
              SELECT * FROM Actor WHERE id = '${id}'
          `);
  return result[0][0];
};
