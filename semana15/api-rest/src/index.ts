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

app.get("/users/searchByType", (req: Request, res: Response) => {
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

/* Exercício 3
    Endpoint: Get lista de usuários por nome
    a) Envio de parâmetro por query.
    b) Alterado com a mensagem de erro: "Users not found by this name." */

app.get("/users/searchByName", (req: Request, res: Response) => {
  let result: user[] = users;

  if (req.query.name) {
    const name = req.query.name as string;
    result = result.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (req.query.name && result.length > 0) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Users not found by this name :(");
  }
});

/* Exercício 4
    Endpoint: POST de novo usuário
    a) Ao trocar o método de POST para PUT, o usuário que eu já
       havia criado sumiu, mas consegui criar novos usuários com
       PUT da mesma forma e mesmo com POST ou PUT, a cada requisição
       um novo usuário era criado, mesmo com todos os dados repetidos.
    b) Acredito que o método PUT seja mais adequado para casos de 
       atualização de dados, imagino que por causa da idempotência
       mas ainda preciso estudar mais sobre pra entender direitinho. */

app.post("/users/createNewUser", (req: Request, res: Response) => {
  try {
    const { id, name, email, type, age } = req.body;

    const newUser = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);
    res.status(200).send({
      message: "ok",
      user: newUser,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port http://localhost:3003");
});
