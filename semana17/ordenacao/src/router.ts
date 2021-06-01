import express, { Router, Request, Response } from "express";
import {
  searchUser,
  searchUserByName,
  searchUserByType,
  searchUserOrdered,
  generalSearch,
} from "./data/functions/users";

const routes: Router = express.Router();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

// GET USER BY NAME
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

// GET 5 USERS PER PAGE AND ALLOW THE USER TO GO TO THE NEXT PAGE
routes.get("/users/all", async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const users = await searchUser(page);
    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// GET ORDERED USERS (DESC/ASC)
routes.get("/users/search", async (req: Request, res: Response) => {
  try {
    const orderBy = (req.query.orderBy as string) || "email";
    const orderType = (req.query.orderType as string) || "ASC";

    const users = await searchUserOrdered(orderBy, orderType);
    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// GET USER BY NAME, TYPE, ORDERED, 5 PER PAGE AND ALLOWING USER TO GO TO THE NEXT PAGE
routes.get("/users/generalSearch", async (req: Request, res: Response) => {
  try {
    const name = (req.query.query as string) || "";
    const type = (req.query.type as string) || "name";
    const page = Number(req.query.page) || 1;
    const orderBy = (req.query.orderBy as string) || "name";
    const orderType = (req.query.orderType as string) || "DESC";

    const users = await generalSearch(name, type, page, orderBy, orderType);

    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;

// GET USER BY TYPE
routes.get("/users/:type", async (req: Request, res: Response) => {
  try {
    const type = req.params.type;
    const users = await searchUserByType(type);
    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
