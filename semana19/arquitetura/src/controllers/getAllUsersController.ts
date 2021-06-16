import { Response, Request } from "express";
import { getAllUsersBusiness } from "../business/getAllUsersBusiness";

export default class GetAllUsersController {
  getAllUsersControl = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const users = await getAllUsersBusiness(token);

      res.status(200).send({ users: users });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
