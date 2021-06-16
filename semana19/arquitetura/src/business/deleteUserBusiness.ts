import connection from "../data/connection";
import { deleteAllUserRecipes } from "../data/deleteAllRecipesQuery";
import {
  deleteUser,
  removeAllFollowedUserReferences,
  removeAllFollowerUserReferences,
} from "../data/deleteUserQueries";
import { getTokenData } from "../services/authenticator";

export const deleteUsersBusiness = async (
  token: string,
  id: string
): Promise<any> => {
  const verifiedToken = getTokenData(token);

  if (!verifiedToken) {
    throw new Error("Unauthorized");
  }

  const [user] = await connection("users")
    .select("role")
    .where("id", verifiedToken.id);

  if (user.role !== "ADMIN") {
    throw new Error(
      "Access denied, only ADMIN role is allowed to delete users."
    );
  }

  await removeAllFollowerUserReferences(id);

  await removeAllFollowedUserReferences(id);

  await deleteAllUserRecipes(id);

  await deleteUser(id);
};
