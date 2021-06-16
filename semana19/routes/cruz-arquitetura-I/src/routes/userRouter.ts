import { Router } from "express";
import { login } from "../controller/user/login";
import { signup } from "../controller/user/signup";

export const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
