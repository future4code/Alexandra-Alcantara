import { Router } from "express";
import LoginController from "../controllers/user/LoginController";
import SignUpController from "../controllers/user/SignUpController";

export const userRouter = Router();

const userSignUp = new SignUpController();
const userLogin = new LoginController();

userRouter.post("/signup", userSignUp.createUser);
userRouter.post("/login", userLogin.login);
