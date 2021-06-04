import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";
import { Account } from "./types";
import dayjs from "dayjs";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
  const { name, CPF, dateOfBirth } = req.body;

  const newDateFormat = dayjs(dateOfBirth).format("DD/MM/YYYY");
  const dateOfBirthFormated = dayjs(newDateFormat);
  const currentDate = Date.now();
  const idade = Math.abs(dateOfBirthFormated.diff(currentDate, "year"));

  if (idade >= 18) {
    accounts.push({
      name,
      CPF,
      dateOfBirth: newDateFormat,
      balance: 0,
      statement: [],
    });
    res.status(201).send(`Conta criada com sucesso! Idade: ${idade}`);
  } else {
    res.status(400).send("Idade deve ser maior ou igual a 18.");
  }
});

app.get("/users/all", (req: Request, res: Response) => {
  try {
    if (!accounts.length) {
      res.statusCode = 404;
      throw new Error("Nenhuma conta encontrada.");
    }
    res.status(200).send(accounts);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Server running at http://localhost:3003");
});
