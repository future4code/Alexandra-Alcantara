import express, { Router, Response } from "express";
import { config } from "dotenv";
import UserDataController from "./controllers/userDataController";
import UserAccessController from "./controllers/userAccessController";
import FeedController from "./controllers/feedController";
import RecipeController from "./controllers/recipeController";
import FollowController from "./controllers/followController";
import AdminController from "./controllers/adminController";

config();

const routes: Router = express.Router();
const userDataController = new UserDataController();
const userAccessController = new UserAccessController();
const feedController = new FeedController();
const recipeController = new RecipeController();
const followController = new FollowController();
const adminController = new AdminController();

routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
});

routes.post("/signup", userAccessController.controlCreateUser);
routes.post("/login", userAccessController.controlLogin);
routes.post("/user/password/reset", userAccessController.controlResetPassword);
routes.get("/user/profile", userDataController.controlGetLoggedUserData);
routes.get("/user/:id", userDataController.controlGetUserById);
routes.post("/user/follow", followController.controlFollow);
routes.post("/user/unfollow", followController.controlUnfollow);
routes.get("/feed", feedController.controlGetFeed);
routes.post("/recipe", recipeController.controlAddRecipe);
routes.get("/recipe/:id", recipeController.controlSearchRecipeById);
routes.post("/recipe/edit/:id", recipeController.controlEditRecipe);
routes.delete("/recipe/delete/:id", recipeController.controlDeleteRecipe);
routes.delete(
  "/recipes/delete/all/user/:id",
  recipeController.controlDeleteAllUserRecipes
);
routes.delete("/admin/delete/user/:id", adminController.controlDeleteuser);

export default routes;
