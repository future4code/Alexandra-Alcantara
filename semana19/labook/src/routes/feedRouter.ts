import { Router } from "express";

export const feedRouter = Router();

feedRouter.get("/feed" /*getFeed*/);
feedRouter.get("/feed/query?type" /*getFeedByType*/);
