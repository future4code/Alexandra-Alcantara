import express, { Router } from "express";
import { config } from "dotenv";
import LoginController from "./controllers/loginController";
import SignUpController from "./controllers/signUpController";
import DeleteUserController from "./controllers/deleteUserController";
import GetAllUsersController from "./controllers/getAllUsersController";

config();

const routes: Router = express.Router();
const loginController = new LoginController();
const signUpController = new SignUpController();
const getAllUsersController = new GetAllUsersController();
const deleteUserController = new DeleteUserController();

routes.post("/signup", signUpController.signUpControl);
routes.post("/login", loginController.loginControl);
routes.get("/all", getAllUsersController.getAllUsersControl);
routes.delete("/admin/delete/user/:id", deleteUserController.controlDeleteuser);

export default routes;
