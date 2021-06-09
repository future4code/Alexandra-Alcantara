import express, { Router, Request, Response } from "express";
import { createUser, searchByEmail } from "./functions/users";
import { connection } from "./services/connection";
import { generateId } from "./services/idGenerator";
import { generateToken, getTokenData } from "./services/authenticator";
import { compareHash, generateHash } from "./services/hashManager";
import { getAddressInfo } from "./services/getAddressInfo";

const routes: Router = express.Router();

/* 08/06/21 */

const hash1 = generateHash("senha");
const hash2 = generateHash("senha");
const compare1 = compareHash("senha", hash1);
const compare2 = compareHash("senha", hash2);

console.log({ hash1, hash2, compare1, compare2 });

/* 07/06/21 */

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
routes.post("/user/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha todos os campos: 'email' e 'password'.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email :/");
    }

    const queryResult = await connection("users_auth")
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

//Endpoint de busca pelo email
routes.get("/user", async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await searchByEmail(email);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//Endpoint de busca pelo id
routes.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const user = await connection("users_auth")
      .select("id", "email")
      .where("id", verifiedToken.id);

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

getAddressInfo("60830265").then(console.log);

export default routes;
