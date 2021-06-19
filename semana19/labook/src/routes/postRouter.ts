import { Router } from "express";
import CreatePostController from "../controllers/post/postController";

export const postRouter = Router();

const createPost = new CreatePostController();

postRouter.post("/create", createPost.createPost);
postRouter.get("/:id" /*getPostById*/);
