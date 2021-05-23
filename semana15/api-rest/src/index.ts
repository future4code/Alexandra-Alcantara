//npm run dev
import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./users";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// Endpoint: Get lista de usuários
// a) Método: GET
// b) A entidade será indicada pelo que se deseja obter da requisição,
//    nesse caso é a lista de usuários, então a entidade será "/users".

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

// Endpoint 2: Get

// Endpoint 3: Get

// Endpoint 4: Get

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});
