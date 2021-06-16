import { Response, Request } from "express";
import { loginBusiness } from "../business/loginBusiness";

export default class LoginController {
  loginControl = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await loginBusiness(email, password);

      res.status(200).send({ access_token: token });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
