import express, { Router, Request, Response } from "express";
import {
  createTask,
  getTaskById,
  getTasksByUser,
  setResponsible,
  getResponsibleByIdTask,
} from "./data/functions/tasks";
import {
  createUser,
  editUser,
  getAllUsers,
  getUserById,
  searchUserByName,
} from "./data/functions/users";

const routes: Router = express.Router();

// --------------- ENDPOINTS DOS USUÁRIOS --------------- //

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

// Recuperar todos os usuários (endpoint 6)
routes.get("/user/all", async (_, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Pesquisar usuário pelo nome (endpoint 8)
routes.get("/user", async (req: Request, res: Response) => {
  try {
    const name = req.query.query as string;
    const searchResult = await searchUserByName(name);
    res.status(200).send(searchResult);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Editar usuário indicando o id (endpoint 3)
routes.post("/user/edit/:id", async (req: Request, res: Response) => {
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

// --------------- ENDPOINTS DAS TAREFAS --------------- //

// Criar tarefa (endpoint 4)
routes.put("/task", async (req: Request, res: Response) => {
  try {
    const { title, description, formatedDeadline, creatorUserId } = req.body;
    await createTask(title, description, formatedDeadline, creatorUserId);
    res.status(200).send("Task Created!");
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Buscar todas as tarefas por usuário (endpoint 7)
routes.get("/task", async (req: Request, res: Response) => {
  try {
    const id = req.query.creatorUserId as string;
    const tasks = await getTasksByUser(id);
    res.status(200).send(tasks);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Atribuir um usuário responsável a uma tarefa (endpoint 9)
routes.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    const { taskId, responsibleUserId } = req.body;
    await setResponsible(taskId, responsibleUserId);
    res.status(200).send(`Responsible defined for this task!`);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Retornar usuários responsáveis por uma tarefa pelo id dela (endpoint 10)
routes.get("/task/:id/responsible", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const responsibles = await getResponsibleByIdTask(id);
    res.status(200).send(responsibles);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Buscar tarefa pelo id (endpoint 5)
routes.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await getTaskById(id);
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;
