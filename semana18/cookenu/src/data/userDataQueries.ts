import connection from "./connection";

// Retrieve user data
export const getUserData = async (id: string): Promise<any> => {
  const result = await connection("users")
    .select("id", "name", "email")
    .where("id", `${id}`);

  return result[0];
};
