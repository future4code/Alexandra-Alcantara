import { Request, Response } from "express";
import GetPostByIdBusiness from "../business/GetPostByIdBusiness";
import { formatData } from "../utils/formatData";

export default class GetPostByIdController {
  getPostById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const token = req.headers.authorization as string;

      const getPostByIdBusiness = new GetPostByIdBusiness();

      const post = await getPostByIdBusiness.getPostByIdBusiness(id, token);

      res.status(200).send({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        createdAt: formatData(post.created_at),
        authorId: post.author_id,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
}
