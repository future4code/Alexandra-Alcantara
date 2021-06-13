import { Response, Request } from "express";
import { getUserData } from "../data/userDataQueries";
import { getTokenData } from "../services/authenticator";

export default class UserDataController {
  controlGetLoggedUserData = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      const user = await getUserData(verifiedToken.id);

      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlGetUserById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      const user = await getUserData(id);

      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
