import { Response, Request } from "express";
import connection from "../data/connection";
import { createUser, login, resetPassword } from "../data/userAccessQueries";
import { generateToken } from "../services/authenticator";
import { compareHash, generateHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import mailTransporter from "../services/mailTransporter";
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

  controlResetPassword = async (req: Request, res: Response) => {
    try {
      const email = req.body.email as string;

      const [user] = await connection("users").where({ email });
      if (!user) {
        res.statusCode = 400;
        throw new Error("Please, check if your email is correct.");
      }

      const characters = "abcdefABCDEF12345!@#$%&*";
      let newPassword = "";
      for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * (characters.length - 1));
        newPassword += characters[index];
      }

      const newHash = generateHash(newPassword);
      await resetPassword(newHash, email);

      const info = await mailTransporter.sendMail({
        from: `<${process.env.NODEMAILER_USER}>`,
        to: email,
        subject: "Teste 1 de nodemailer",
        text: `Sua nova senha é ${newPassword}`,
        html: `<p>Sua nova senha é <strong>${newPassword}</strong></p>`,
      });

      console.log({
        newPassword,
        oldHash: user.password,
        newHash: newHash,
        info,
      });

      res.send(200);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
