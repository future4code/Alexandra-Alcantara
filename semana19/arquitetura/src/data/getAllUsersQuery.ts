import connection from "./connection";

// GET ALL USERS
export const getAllUsers = async (): Promise<any> => {
  const result = await connection("users").select("*");

  return result;
};
