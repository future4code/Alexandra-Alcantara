import { Response, Request } from "express";
import connection from "../data/connection";
import {
  addRecipe,
  deleteAllUserRecipes,
  deleteRecipe,
  editRecipe,
  searchRecipeById,
} from "../data/recipeQueries";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { recipe } from "../types/recipe";
import { USER_ROLES } from "../types/user";
import { formatData } from "../utils/formatData";

export default class RecipeController {
  controlAddRecipe = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      if (!title || !description) {
        res.statusCode = 422;
        throw new Error("Preencha todos os campos: 'title' e 'description'.");
      }

      const newRecipe: recipe = {
        id: generateId(),
        title,
        description,
        user_id: verifiedToken.id,
      };

      await addRecipe(newRecipe);

      res.status(200).send({ message: "Recipe added successfully!" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlSearchRecipeById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      const recipe = await searchRecipeById(id);

      res.status(200).send({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        createdAt: formatData(recipe.created_at),
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlEditRecipe = async (req: Request, res: Response) => {
    try {
      const recipe_id = req.params.id;
      const { title, description } = req.body;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      if (verifiedToken.role !== USER_ROLES.NORMAL) {
        res.statusCode = 403;
        throw new Error("Only NORMAL users are allowed to edit recipes.");
      }

      if (!title || !description) {
        res.statusCode = 422;
        throw new Error("Please, fill all fields: 'title' and 'description'.");
      }

      const recipe = await searchRecipeById(recipe_id);

      if (recipe.user_id !== verifiedToken.id) {
        res.statusCode = 401;
        throw new Error(
          "This recipe doesn't belong to you, so you're not allowed to edit it."
        );
      }

      await editRecipe(recipe_id, verifiedToken.id, title, description);

      res.status(200).send({ message: "Recipe edited successfully" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlDeleteRecipe = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      const recipe = await searchRecipeById(id);

      const [user] = await connection("users")
        .select("name", "role")
        .where("id", verifiedToken.id);

      if (user.role !== "ADMIN") {
        if (recipe.user_id !== verifiedToken.id) {
          res.statusCode = 401;
          throw new Error(
            "This recipe doesn't belong to you, so you're not allowed to delete it."
          );
        }
      }

      await deleteRecipe(id);

      res.status(200).send({ message: "Recipe deleted successfully!" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlDeleteAllUserRecipes = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      const [user] = await connection("users")
        .select("id", "role")
        .where("id", verifiedToken.id);

      if (user.role !== "ADMIN") {
        if (user.id !== verifiedToken.id) {
          res.statusCode = 401;
          throw new Error(
            "You aren't allowed to delete these recipes, check your credentials."
          );
        }
      }

      await deleteAllUserRecipes(id);

      res.status(200).send({ message: "All recipes deleted successfully!" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
