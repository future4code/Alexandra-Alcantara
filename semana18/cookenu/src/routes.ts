import express, { Router, Request, Response } from "express";
import {
  deleteUser,
  followUser,
  removeAllFollowedUserReferences,
  removeAllFollowerUserReferences,
  unfollowUser,
} from "./functions/users";
import {
  createRecipe,
  deleteAllUserRecipes,
  deleteRecipe,
  editRecipe,
  getFeed,
  searchRecipeById,
} from "./functions/recipes";
import connection from "./data/connection";
import { generateId } from "./services/idGenerator";
import { getTokenData } from "./services/authenticator";
import { generateHash } from "./services/hashManager";
import { recipe } from "./types/recipe";
import { feedData } from "./types/feed";
import { follow } from "./types/follow";
import { USER_ROLES } from "./types/user";
import { formatData } from "./utils/formatData";
import mailTransporter from "./services/mailTransporter";
import { config } from "dotenv";
import UserDataController from "./controllers/userDataController";
import UserAccessController from "./controllers/userAccessController";

config();

const routes: Router = express.Router();
const userDataController = new UserDataController();
const userAccessController = new UserAccessController();

// routes.get("/ta-acordado?", async (_, res: Response) => {
//   res.status(200).send("eu to e tu?");
// });

routes.post("/signup", userAccessController.controlCreateUser);
routes.post("/login", userAccessController.controlLogin);
routes.get("/user/profile", userDataController.controlGetLoggedUserData);
routes.get("/user/:id", userDataController.controlGetUserById);

//Endpoint para trazer o feed
routes.get("/user/feed", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }
    const feed = await getFeed(verifiedToken.id);

    const feedMap = feed.map((item: feedData) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        user_id: item.user_id,
        name: item.name,
        created_at: formatData(item.created_at),
      };
    });

    res.status(200).send(feedMap);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Endpoint de adicionar receita
routes.post("/recipe", async (req: Request, res: Response) => {
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

    await createRecipe(newRecipe);

    res.status(200).send("Recipe added successfully!");
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Endpoint de pesquisar a receita pelo id dela
routes.get("/recipe/:id", async (req: Request, res: Response) => {
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
});

//Endpoint de seguir usuário
routes.post("/user/follow", async (req: Request, res: Response) => {
  try {
    const { followed_id } = req.body;

    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    if (!followed_id) {
      res.statusCode = 422;
      throw new Error("Please, inform your id.");
    }

    const newFollowed: follow = {
      followed_id,
      follower_id: verifiedToken.id,
    };

    await followUser(newFollowed);

    res.status(200).send({ message: "Followed successfully" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Endpoint de deixar de seguir usuário
routes.post("/user/unfollow", async (req: Request, res: Response) => {
  try {
    const { followed_id } = req.body;

    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    if (!followed_id) {
      res.statusCode = 422;
      throw new Error("Please, inform an id to unfollow.");
    }

    await unfollowUser(followed_id, verifiedToken.id);

    res.status(200).send({ message: "Unfollowed successfully" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Endpoint para editar receita
routes.post("/recipe/edit/:id", async (req: Request, res: Response) => {
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
});

// Deletar receita pelo id dela
routes.delete("/recipe/delete/:id", async (req: Request, res: Response) => {
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

    res.status(200).send({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Deletar usuário
routes.delete("/admin/delete/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const [user] = await connection("users")
      .select("name", "role")
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

    res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Deletar todas as receitas de um usuário pelo id dele
routes.delete(
  "/recipes/delete/all/user/:id",
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      await deleteAllUserRecipes(id);

      res.status(200).send({ message: "All recipes deleted successfully" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
);

// Endpoint para resetar e enviar uma nova senha para o usuário
routes.post("/user/password/reset", async (req: Request, res: Response) => {
  try {
    const email = req.body.email as string;

    const [user] = await connection("users").where({ email });
    if (!user) {
      res.statusCode = 400;
      throw new Error("Please, check if your email is correct.");
    }

    const characters = "abcdefABCDEF12345!@#$%&*";
    let newPassword = "";
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * (characters.length - 1));
      newPassword += characters[index];
    }

    const newHash = generateHash(newPassword);
    await connection("users").update({ password: newHash }).where({ email });

    // mailTransporter
    const info = await mailTransporter.sendMail({
      from: `<${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "Teste 1 de nodemailer",
      text: `Sua nova senha é ${newPassword}`,
      html: `<p>Sua nova senha é <strong>${newPassword}</strong></p>`,
    });

    console.log({
      newPassword,
      oldHash: user.password,
      newHash: newHash,
      info,
    });

    res.send(200);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;
