import express, { Router, Request, Response } from "express";
import {
  createUser,
  followUser,
  login,
  searchUserById,
  unfollowUser,
} from "./functions/users";
import {
  createRecipe,
  editRecipe,
  getFeed,
  searchRecipeById,
} from "./functions/recipes";
import { connection } from "./services/connection";
import { generateId } from "./services/idGenerator";
import { generateToken, getTokenData } from "./services/authenticator";
import { compareHash, generateHash } from "./services/hashManager";
import { feedData, follow, recipe, user, USER_ROLES } from "./types";
import { formatData } from "./utils/formatData";

const routes: Router = express.Router();

routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
});

//Endpoint de cadastro
routes.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      res.statusCode = 422;
      throw new Error(
        "Preencha todos os campos: 'name', 'email', 'password' and 'role'."
      );
    }

    if (!(role in USER_ROLES)) {
      throw new Error("Role must be NORMAL or ADMIN.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email :/");
    }

    if (password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }

    const [user] = await connection("users").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já está cadastrado!");
    }

    const newUser: user = {
      id: generateId(),
      name,
      email,
      password: generateHash(password),
      role,
    };

    const token: string = generateToken({
      id: newUser.id,
      role: newUser.role,
    });

    await createUser(newUser);

    res.status(200).send({ access_token: token });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Endpoint de login
routes.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Please, fill all fields: email and password.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email :/");
    }

    const user = await login(email, password);

    if (!user) {
      throw new Error("User not found :/");
    }

    const passwordIsCorrect: boolean = compareHash(password, user.password);

    if (!passwordIsCorrect) {
      throw new Error("Invalid credentials :/");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({ access_token: token });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Endpoint de retornar dados do perfil
routes.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const [user] = await connection("users")
      .select("id", "name", "email")
      .where("id", verifiedToken.id);

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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

//Endpoint de busca pelo id
routes.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const user = await searchUserById(id);

    res.status(200).send(user);
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

//Endpoint de pesquisar a receita pelo id
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
      throw new Error("Informe o id, por favor.");
    }

    await unfollowUser(followed_id);

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

export default routes;
