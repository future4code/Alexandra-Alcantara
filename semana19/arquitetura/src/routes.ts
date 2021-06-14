import express, { Router, Response } from "express";
import { config } from "dotenv";
import LoginController from "./controllers/loginController";
import SignUpController from "./controllers/signUpController";
import DeleteUserController from "./controllers/deleteUserController";

config();

const routes: Router = express.Router();
const loginController = new LoginController();
const signUpController = new SignUpController();
const deleteUserController = new DeleteUserController();

routes.post("/signup", signUpController.controlSignUp);
routes.post("/login", loginController.controlLogin);
routes.delete("/admin/delete/user/:id", deleteUserController.controlDeleteuser);

export default routes;
