import { getAllUsers } from "../data/getAllUsersQuery";
import { getTokenData } from "../services/authenticator";

export const getAllUsersBusiness = async (token: any): Promise<any> => {
  const verifiedToken = getTokenData(token);

  if (!verifiedToken) {
    throw new Error("Unauthorized");
  }

  const users = await getAllUsers();

  return users;
};
