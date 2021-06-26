import { Router } from "express";
import GetFeedController from "../controllers/feed/GetFeedController";

export const feedRouter = Router();

const getFeed = new GetFeedController();

feedRouter.get("", getFeed.getFeed);
feedRouter.get("/feed/query?type" /*getFeedByType*/);
