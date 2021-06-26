import { Response, Request } from "express";
import UndoFriendshipBusiness from "../../business/friendship/UndoFriendshipBusiness";

export default class UndoFriendshipController {
  undoFriendship = async (req: Request, res: Response) => {
    try {
      const { recipient_request_id } = req.body;

      const undoFriendshipBusiness = new UndoFriendshipBusiness();

      const token = req.headers.authorization as string;

      await undoFriendshipBusiness.undoFriendshipBusiness(
        recipient_request_id,
        token
      );

      res.status(201).send({ message: "Friendship is gone :/" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
