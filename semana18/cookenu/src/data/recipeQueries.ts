import connection from "./connection";
import { recipe } from "../types/recipe";

// ADD RECIPE
export const addRecipe = async (recipe: recipe): Promise<any> => {
  await connection("recipes").insert(recipe);
};

// SEARCH RECIPE BY ID
export const searchRecipeById = async (id: string): Promise<any> => {
  const result = await connection("recipes")
    .select("id", "title", "description", "created_at", "user_id")
    .where("id", `${id}`);

  return result[0];
};

// EDIT RECIPE
export const editRecipe = async (
  recipe_id: string,
  user_id: string,
  title: string,
  description: string
): Promise<any> => {
  await connection("recipes")
    .update({
      title,
      description,
    })
    .where("id", recipe_id)
    .andWhere("user_id", `${user_id}`);
};

// DELETE RECIPE BY -> RECIPE ID
export const deleteRecipe = async (id: string): Promise<any> => {
  await connection("recipes").delete(id).where("id", id);
};

// DELETE ALL RECIPES BY -> USER ID
export const deleteAllUserRecipes = async (id: string): Promise<any> => {
  await connection("recipes").delete(id).where("user_id", id);
};
