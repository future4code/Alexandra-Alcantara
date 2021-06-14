import { Response, Request } from "express";
import { signUpBusiness } from "../business/signUpBusiness";

export default class SignUpController {
  controlSignUp = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      const token = await signUpBusiness({ name, email, password, role });

      res.status(201).send({ message: "User created!", access_token: token });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
