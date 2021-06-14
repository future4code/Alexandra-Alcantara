import connection from "./connection";

// DELETE ALL RECIPES BY -> USER ID
export const deleteAllUserRecipes = async (id: string): Promise<any> => {
  await connection("recipes").delete(id).where("user_id", id);
};
