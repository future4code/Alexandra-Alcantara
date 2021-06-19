import { Router } from "express";
import MakeFriendshipController from "../controllers/friendship/MakeFriendshipController";

export const friendshipRouter = Router();

const makeFriendship = new MakeFriendshipController();

friendshipRouter.post("/make", makeFriendship.makeFriendship);
