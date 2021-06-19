import { Response, Request } from "express";
import MakeFriendshipBusiness from "../../business/friendship/MakeFriendshipBusiness";

export default class MakeFriendshipController {
  makeFriendship = async (req: Request, res: Response) => {
    try {
      const { recipient_request_id } = req.body;

      const makeFriendshipBusiness = new MakeFriendshipBusiness();

      const token = req.headers.authorization as string;

      await makeFriendshipBusiness.makeFriendshipBusiness(
        recipient_request_id,
        token
      );

      res.status(201).send({ message: "Now you're friends!" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
