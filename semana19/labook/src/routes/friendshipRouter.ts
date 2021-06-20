import { Router } from "express";
import MakeFriendshipController from "../controllers/friendship/MakeFriendshipController";
import UndoFriendshipController from "../controllers/friendship/UndoFriendshipController";

export const friendshipRouter = Router();

const makeFriendship = new MakeFriendshipController();
const undoFriendship = new UndoFriendshipController();

friendshipRouter.post("/make", makeFriendship.makeFriendship);
friendshipRouter.delete("/undo", undoFriendship.undoFriendship);
