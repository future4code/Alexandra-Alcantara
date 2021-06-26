import { Request, Response } from "express";
import LoginBusiness from "../../business/user/LoginBusiness";

export default class LoginController {
  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const loginBusiness = new LoginBusiness();

      const token: string = await loginBusiness.loginBusiness({
        email,
        password,
      });

      res.status(200).send({ message: "You're on!", access_token: token });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
