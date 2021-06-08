import express, { Router, Request, Response } from "express";
import { createUser, searchByEmail } from "./functions/users";
import { connection } from "./services/connection";
import { generateId } from "./services/idGenerator";
import { generateToken, getTokenData } from "./services/authenticator";

const routes: Router = express.Router();

// Teste do gerador de id
console.log("Generate id: ", generateId());

// Teste do gerador de id com chave
console.log(
  "Generate token: ",
  generateToken({
    id: "ale",
  })
);

// Teste do getTokenData
console.log(
  getTokenData(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsZSIsImlhdCI6MTYyMzE3NjY5OCwiZXhwIjoxNjU0NzM0Mjk4fQ.ujyjiWMZuUfHxQkyfoyjPOybSLO-agAZv5Et59GFYFM"
  )
);

// Teste do server
routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
});

//Endpoint de cadastro
routes.post("/user/signup", async (req: Request, res: Response) => {
  try {
    const { /*name, nickname,*/ email, password } = req.body;

    if (/*!name || !nickname ||*/ !email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha todos os campos: 'email' e 'password'.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email :/");
    }

    if (password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }

    const [user] = await connection("users_auth_email_pwd").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já está cadastrado!");
    }

    // const id: string = Date.now().toString();
    const id: string = generateId();

    await createUser(id, /*name, nickname,*/ email, password);

    const newUser = { id, /*name, nickname,*/ email, password };

    const token: string = generateToken({
      id: newUser.id,
    });

    res.status(200).send({ /*newUser,*/ token });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Endpoint de login
routes.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha todos os campos: 'email' e 'password'.");
    }

    const queryResult = await connection("users_auth_email_pwd")
      .select("*")
      .where("email", `${email}`);

    const user = queryResult[0];

    if (!user) {
      throw new Error("User not found :/");
    }

    if (user.password !== password) {
      throw new Error("Invalid credentials :/");
    }

    const token: string = generateToken({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

routes.get("/user", async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const user = await searchByEmail(email);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default routes;
