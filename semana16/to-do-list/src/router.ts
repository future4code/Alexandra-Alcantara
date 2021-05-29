import dayjs from "dayjs";
import express, { Router, Request, Response } from "express";
import { createTask } from "./data/functions/tasks";
import { createUser, editUser, getUserById } from "./data/functions/users";

const routes: Router = express.Router();

// --------------- ENDPOINTS DO USUÁRIO --------------- //

// Criar usuário (endpoint 1)
routes.put("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;
    await createUser(name, nickname, email);
    res.status(200).send(`User Created!`);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Buscar usuário pelo id (endpoint 2)
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

// Editar usuário indicando o id (endpoint 3)
routes.post("/user/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, nickname, email } = req.body;
    await editUser(id, name, nickname, email);
    res.status(200).send(`Updated!`);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;

// --------------- ENDPOINTS DA TAREFA --------------- //

// Criar tarefa (endpoint 4)
routes.put("/task", async (req: Request, res: Response) => {
  try {
    const { title, description, formatedDeadline, creatorUserId } = req.body;

    console.log(
      "Console log do endpoint:",
      title,
      description,
      formatedDeadline,
      creatorUserId
    );
    await createTask(title, description, formatedDeadline, creatorUserId);
    res.status(200).send("Task Created!");
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
