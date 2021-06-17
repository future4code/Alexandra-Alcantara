import { Router } from "express";
import SignUpController from "../controllers/user/signup";

export const userRouter = Router();

const userSignUp = new SignUpController();

userRouter.post("/signup", userSignUp.createUser);
userRouter.post("/login" /*login*/);
