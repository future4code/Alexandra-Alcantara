import { connection } from "./services/connection";
import app from "./app";
import { Request, Response } from "express";
import { generateId } from "./services/idGenerator";

// Testar a conexão com o server
app.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

console.log(generateId());
