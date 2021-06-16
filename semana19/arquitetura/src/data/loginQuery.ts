import connection from "./connection";

// LOGIN
export const login = async (email: string): Promise<any> => {
  const result = await connection("users")
    .select("*")
    .where("email", `${email}`);

  return result[0];
};
