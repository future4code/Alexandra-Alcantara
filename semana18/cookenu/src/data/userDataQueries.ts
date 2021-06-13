import connection from "./connection";

// RETRIEVE USER DATA
export const getUserData = async (id: string): Promise<any> => {
  const result = await connection("users")
    .select("id", "name", "email")
    .where("id", `${id}`);

  return result[0];
};
