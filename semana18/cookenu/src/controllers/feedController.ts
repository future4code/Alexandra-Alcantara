import { Response, Request } from "express";
import { getFeed } from "../data/feedQueries";
import { getTokenData } from "../services/authenticator";
import { feedData } from "../types/feed";
import { formatData } from "../utils/formatData";

export default class FeedController {
  controlGetFeed = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }
      const feed = await getFeed(verifiedToken.id);

      const feedMap = feed.map((item: feedData) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          user_id: item.user_id,
          name: item.name,
          created_at: formatData(item.created_at),
        };
      });

      res.status(200).send(feedMap);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
