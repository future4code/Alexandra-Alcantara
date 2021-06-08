import express, { Router, Request, Response } from "express";
import { createUser } from "./functions/users";
import { generateId } from "./service/idGenerator";

const routes: Router = express.Router();

// Teste do gerador de id
console.log(generateId());

// Teste do server
routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
});

// Criar usuário
routes.put("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email, password } = req.body;

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
