import express, { Router, Request, Response } from "express";
import { searchUserByName, searchUserByType } from "./data/functions/users";

const routes: Router = express.Router();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

// FILTRAGEM POR NOME
routes.get("/users", async (req: Request, res: Response) => {
  try {
    const name = req.query.query as string;
    const users = await searchUserByName(name);
    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// FILTRAGEM POR TIPO
routes.get("/users/:type", async (req: Request, res: Response) => {
  try {
    const type = req.params.type;
    const users = await searchUserByType(type);
    console.log(users);
    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;
