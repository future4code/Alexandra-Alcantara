import { useSpring } from "framer-motion";
import { connection } from "../services/connection";
import { recipe } from "../types";

// Função para criar receita
export const createRecipe = async (recipe: recipe): Promise<any> => {
  await connection("recipes").insert(recipe);
};

// Função para buscar receita pelo id
export const searchRecipeById = async (id: string): Promise<any> => {
  const result = await connection("recipes")
    .select("id", "title", "description", "created_at", "user_id")
    .where("id", `${id}`);

  return result[0];
};

// Função para trazer todo o feed de receitas
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

// Função para editar receita
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
