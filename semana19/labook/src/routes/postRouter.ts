import { Router } from "express";
import CreatePostController from "../controllers/post/CreatePostController";
import GetPostByIdController from "../controllers/post/GetPostByIdController";

export const postRouter = Router();

const createPost = new CreatePostController();
const getPostById = new GetPostByIdController();

postRouter.post("/create", createPost.createPost);
postRouter.get("/:id", getPostById.getPostById);
