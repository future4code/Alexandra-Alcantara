import { Response, Request } from "express";
import connection from "../data/connection";
import { createUser, login } from "../data/userAccessQueries";
import { generateToken } from "../services/authenticator";
import { compareHash, generateHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user, USER_ROLES } from "../types/user";

export default class UserAccessController {
  controlCreateUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password || !role) {
        res.statusCode = 422;
        throw new Error(
          "Preencha todos os campos: 'name', 'email', 'password' and 'role'."
        );
      }

      if (!(role in USER_ROLES)) {
        throw new Error("Role must be NORMAL or ADMIN.");
      }

      if (!email.includes("@")) {
        throw new Error("Invalid email :/");
      }

      if (password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const [user] = await connection("users").where({ email });

      if (user) {
        res.statusCode = 409;
        throw new Error("Email já está cadastrado!");
      }

      const newUser: user = {
        id: generateId(),
        name,
        email,
        password: generateHash(password),
        role,
      };

      const token: string = generateToken({
        id: newUser.id,
        role: newUser.role,
      });

      await createUser(newUser);

      res.status(200).send({ access_token: token });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.statusCode = 422;
        throw new Error("Please, fill all fields: email and password.");
      }

      if (!email.includes("@")) {
        throw new Error("Invalid email :/");
      }

      const user = await login(email, password);

      if (!user) {
        throw new Error("User not found :/");
      }

      const passwordIsCorrect: boolean = compareHash(password, user.password);

      if (!passwordIsCorrect) {
        throw new Error("Invalid credentials :/");
      }

      const token: string = generateToken({
        id: user.id,
        role: user.role,
      });

      res.status(200).send({ access_token: token });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
