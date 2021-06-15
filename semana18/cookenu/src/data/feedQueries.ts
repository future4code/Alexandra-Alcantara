import connection from "./connection";

// GET FEED
export const getFeed = async (id: string): Promise<any> => {
  const result = await connection("recipes")
    .select(
      "recipes.id",
      "title",
      "name",
      "description",
      "created_at",
      "user_id"
    )
    .join("users", "users.id", "user_id")
    .join("followers", "followed_id", "user_id")
    .where("follower_id", `${id}`)
    .orderBy("created_at");

  return result;
};
