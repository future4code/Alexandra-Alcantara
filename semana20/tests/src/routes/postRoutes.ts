import { Router } from "express";
import GetPostByIdController from "../controller/GetPostByIdController";
import CreatePostController from "../controller/PostController";

export const postRouter = Router();

const createPost = new CreatePostController();
const getPostById = new GetPostByIdController();

postRouter.post("/create", createPost.createPost);
postRouter.get("/:id", getPostById.getPostById);
