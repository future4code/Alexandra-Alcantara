import express, { Router, Request, Response } from "express";
import { createRecipe, createUser, searchUserById } from "./functions/users";
import { connection } from "./services/connection";
import { generateId } from "./services/idGenerator";
import { generateToken, getTokenData } from "./services/authenticator";
import { compareHash, generateHash } from "./services/hashManager";
import { recipe, user } from "./types";

const routes: Router = express.Router();

routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
});

//Endpoint de cadastro
routes.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error(
        "Preencha todos os campos: 'name', 'email' e 'password'."
      );
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
    };

    const token: string = generateToken({
      id: newUser.id,
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
      throw new Error("Preencha todos os campos: 'email' e 'password'.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email :/");
    }

    const queryResult = await connection("users")
      .select("*")
      .where("email", `${email}`);

    const user = queryResult[0];

    if (!user) {
      throw new Error("User not found :/");
    }

    const passwordIsCorrect: boolean = compareHash(password, user.password);

    if (!passwordIsCorrect) {
      throw new Error("Invalid credentials :/");
    }

    const token: string = generateToken({
      id: user.id,
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

    const user = await connection("users")
      .select("id", "name", "email")
      .where("id", verifiedToken.id);

    res.status(200).send(user);
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

    const [user_id] = await connection("users").where({ id });

    if (!user_id) {
      res.statusCode = 409;
      throw new Error("User not found :/");
    }

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

export default routes;
