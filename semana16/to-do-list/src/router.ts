import express, { Router, Request, Response } from "express";
import { connection } from "./data/connection";
import { getActorById } from "./data/functions/users";

const routes: Router = express.Router();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.put("/user", async (req: Request, res: Response) => {
  try {
    await connection.raw(`
        INSERT INTO ToDoListUser (name, nickname, email)
        VALUES(
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
        )
    `);
    res.status(200).send("User Created! :)");
  } catch (error) {
    res.status(400).send("Unexpected error.");
  }
});

routes.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);
    res.status(200).send(actor);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

export default routes;
