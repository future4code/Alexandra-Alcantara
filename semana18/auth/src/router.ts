import express, { Router, Request, Response } from "express";
import { createUser } from "./functions/users";
import { connection } from "./services/connection";
import { generateId } from "./services/idGenerator";
import { generateToken } from "./services/authenticator";

const routes: Router = express.Router();

// Teste do gerador de id
console.log("Generate id: ", generateId());

// Teste do gerador de id
console.log(
  "Generate token: ",
  generateToken({
    id: "ale",
  })
);

// Teste do server
routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
});

// Criar usuário
routes.put("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email, password } = req.body;

    if (!name || !nickname || !email || !password) {
      res.statusCode = 422;
      throw new Error(
        "Preencha todos os campos: 'name', 'nickname', 'email' e 'password'."
      );
    }

    const [user] = await connection("users_auth").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já está cadastrado!");
    }

    // const id: string = Date.now().toString();
    const id: string = generateId();

    await createUser(id, name, nickname, email, password);

    const newUser = { id, name, nickname, email, password };

    res.status(200).send({ newUser });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;
