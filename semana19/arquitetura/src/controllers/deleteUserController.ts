import { Response, Request } from "express";
import { deleteUsersBusiness } from "../business/deleteUserBusiness";

export default class DeleteUserController {
  deleteUserControl = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const token = req.headers.authorization as string;

      await deleteUsersBusiness(token, id);

      res.status(200).send({ message: "User deleted successfully!" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
