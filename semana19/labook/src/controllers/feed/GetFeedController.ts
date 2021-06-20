import { Request, Response } from "express";
import GetFeedBusiness from "../../business/feed/getFeedBusiness";

export default class GetFeedController {
  getFeed = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const getFeedBusiness = new GetFeedBusiness();

      const feed = await getFeedBusiness.getFeed(token);

      res.status(200).send({ posts: feed });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
}
