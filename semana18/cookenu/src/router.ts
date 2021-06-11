import express, { Router, Request, Response } from "express";
import { createUser, searchByEmail } from "./functions/users";
import { connection } from "./services/connection";
import { generateId } from "./services/idGenerator";
import { generateToken, getTokenData } from "./services/authenticator";
import { compareHash, generateHash } from "./services/hashManager";
import { user } from "./types";

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

    if (user.password !== password) {
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

export default routes;
