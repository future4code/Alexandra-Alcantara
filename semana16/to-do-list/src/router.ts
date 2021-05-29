import express, { Router, Request, Response } from "express";
import { createUser, getUserById } from "./data/functions/users";

const routes: Router = express.Router();

routes.put("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;
    const newUser = await createUser(name, nickname, email);
    res.status(200).send(`User Created!`);
  } catch (error) {
    res.status(400).send("Unexpected error.");
  }
});

routes.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;
