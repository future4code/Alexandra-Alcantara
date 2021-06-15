import { Response, Request } from "express";
import { followUser, unfollowUser } from "../data/followQueries";
import { getTokenData } from "../services/authenticator";
import { follow } from "../types/follow";

export default class FollowController {
  controlFollow = async (req: Request, res: Response) => {
    try {
      const { followed_id } = req.body;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      if (!followed_id) {
        res.statusCode = 422;
        throw new Error("Please, inform your id.");
      }

      const newFollowed: follow = {
        followed_id,
        follower_id: verifiedToken.id,
      };

      await followUser(newFollowed);

      res.status(200).send({ message: "Followed successfully" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlUnfollow = async (req: Request, res: Response) => {
    try {
      const { followed_id } = req.body;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      if (!followed_id) {
        res.statusCode = 422;
        throw new Error("Please, inform an id to unfollow.");
      }

      await unfollowUser(followed_id, verifiedToken.id);

      res.status(200).send({ message: "Unfollowed successfully" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
