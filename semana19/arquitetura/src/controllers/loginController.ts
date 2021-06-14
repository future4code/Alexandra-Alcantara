import { Response, Request } from "express";
import { login } from "../data/loginQuery";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export default class LoginController {
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
