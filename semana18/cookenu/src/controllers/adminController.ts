import { Response, Request } from "express";
import {
  deleteUser,
  removeAllFollowedUserReferences,
  removeAllFollowerUserReferences,
} from "../data/adminOnlyQueries";
import connection from "../data/connection";
import { getTokenData } from "../services/authenticator";
import { deleteAllUserRecipes } from "../data/recipeQueries";

export default class AdminController {
  controlDeleteuser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if (!verifiedToken) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }

      const [user] = await connection("users")
        .select("name", "role")
        .where("id", verifiedToken.id);

      if (user.role !== "ADMIN") {
        throw new Error(
          "Access denied, only ADMIN role is allowed to delete users."
        );
      }

      await removeAllFollowerUserReferences(id);

      await removeAllFollowedUserReferences(id);

      await deleteAllUserRecipes(id);

      await deleteUser(id);

      res.status(200).send({ message: "User deleted successfully!" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
}
