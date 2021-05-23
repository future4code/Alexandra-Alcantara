//npm run dev
import express, { Request, Response } from "express";
import cors from "cors";
import { users, user } from "./users";

const app = express();

app.use(express.json());
app.use(cors());

/* Exercício 1
    Endpoint: Get lista de usuários
    a) Método: GET
    b) A entidade será indicada pelo que se deseja obter da requisição,
       nesse caso é a lista de usuários, então a entidade será "/users". */

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

/* Exercício 2
    Endpoint: Get lista de usuários por type
    a) O parâmetro de type foi passado como query pois a requisição receberia 
       apenas um parâmetro para executar a pesquisa.
    b) Sim, criando um "enum" específico para os tipos de usuário, assim a 
       os types só podem usar o que foi definido no enum. */

app.get("/users/search", (req: Request, res: Response) => {
  let result: user[] = users;

  if (req.query.type) {
    const type = req.query.type as string;
    result = result.filter((user) =>
      user.type.toLowerCase().includes(type.toLowerCase())
    );
  }

  if (req.query.type && result.length > 0) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Users not found :(");
  }
});

// Endpoint 3: Get

// Endpoint 4: Get

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});
