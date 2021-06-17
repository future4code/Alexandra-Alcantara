import { Request, Response } from "express";
import SignUpBusiness from "../../business/user/SignUp";

export default class SignUpController {
  createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const signUpBusiness = new SignUpBusiness();

      const token = await signUpBusiness.createUserBusiness({
        name,
        email,
        password,
      });

      res.status(201).send({
        message: "User created!",
        token,
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
