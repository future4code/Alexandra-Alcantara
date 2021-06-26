import { Response, Request } from "express";
import CreatePostBusiness from "../../business/post/CreatePostBusiness";

export default class CreatePostController {
  createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type } = req.body;

      const createPostBusiness = new CreatePostBusiness();

      const token = req.headers.authorization as string;

      const post = await createPostBusiness.createPostBusiness(
        {
          photo,
          description,
          type,
        },
        token
      );

      res.status(201).send({
        message: "Post created!",
        post,
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
