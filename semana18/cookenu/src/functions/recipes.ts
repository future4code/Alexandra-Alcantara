import { getTokenData } from "../services/authenticator";
import { connection } from "../services/connection";
import { recipe, user } from "../types";

// Função para criar receita
export const createRecipe = async (recipe: recipe): Promise<any> => {
  await connection("recipes").insert(recipe);
};

// Função para buscar receita pelo id
export const searchRecipeById = async (id: string): Promise<any> => {
  const result = await connection("recipes")
    .select("id", "title", "description", "created_at")
    .where("id", `${id}`);

  return result[0];
};
