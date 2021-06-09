import express, { Router, Request, Response } from "express";
import { createUser, deleteUser, searchByEmail } from "./functions/users";
import { connection } from "./services/connection";
import { generateId } from "./services/idGenerator";
import { generateToken, getTokenData } from "./services/authenticator";
import { compareHash, generateHash } from "./services/hashManager";
import { user } from "./types/user";

const routes: Router = express.Router();

/* 08/06/21 */

/* const hash1 = generateHash("senha");
const hash2 = generateHash("senha");
const compare1 = compareHash("senha", hash1);
const compare2 = compareHash("senha", hash2);

console.log({ hash1, hash2, compare1, compare2 }); */

/* 07/06/21 */

// Teste do gerador de id
/* console.log("Generate id: ", generateId()); */

// Teste do gerador de id com chave
/* console.log(
  "Generate token: ",
  generateToken({
    id: "ale",
  })
); */

// Teste do getTokenData
/* console.log(
  getTokenData(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsZSIsImlhdCI6MTYyMzE3NjY5OCwiZXhwIjoxNjU0NzM0Mjk4fQ.ujyjiWMZuUfHxQkyfoyjPOybSLO-agAZv5Et59GFYFM"
  )
); */

// Teste do server
/* routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
}); */

//Endpoint de cadastro
routes.post("/user/signup", async (req: Request, res: Response) => {
  try {
    const { /*name, nickname,*/ email, password, role } = req.body;

    if (/*!name || !nickname ||*/ !email || !password || !role) {
      res.statusCode = 422;
      throw new Error(
        "Preencha todos os campos: 'email', 'password' e 'role'."
      );
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

    const newUser: user = {
      id,
      /*name,
      nickname,*/
      email,
      password: generateHash(password),
      role,
    };

    await createUser(newUser);

    const token: string = generateToken({
      id: newUser.id,
      role: newUser.role,
    });

    res.status(200).send({ newUser, token });
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

    const queryResult = await connection("users_auth_email_pwd")
      .select("*")
      .where("email", `${email}`);

    const user = queryResult[0];

    if (!user) {
      throw new Error("User not found :/");
    }

    const passwordIsCorrect: boolean = compareHash(password, user.password);

    if (!passwordIsCorrect /*user.password !== password*/) {
      throw new Error("Invalid credentials :/");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
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

    if (verifiedToken.role !== "NORMAL") {
      throw new Error(
        "Access denied to your role, only normal users are allowed :/"
      );
    }

    if (!verifiedToken) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const user = await connection("users_auth_email_pwd")
      .select("id", "email", "role")
      .where("id", verifiedToken.id);

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

routes.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    if (verifiedToken.role !== "ADMIN") {
      throw new Error("Only admin is allowed to delete users.");
    }

    const id = req.params.id;

    await deleteUser(id);

    res.sendStatus(200);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
export default routes;
