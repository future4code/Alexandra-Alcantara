import { Post, PostDataDTO } from "../../model/post";
import { generateId } from "../../services/idGenerator";
import { PostDatabase } from "../../data/post/PostDatabase";
import { generateToken, getTokenData } from "../../services/authenticator";
import PostValidations from "./validations/PostValidations";

export default class CreatePostBusiness extends PostValidations {
  private userDb: PostDatabase = new PostDatabase();

  createPostBusiness = async (data: PostDataDTO, token: string) => {
    const { photo, description, type } = this.postInputValidation(data);

    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      throw new Error("Unauthorized");
    }

    const newPost: Post = {
      id: generateId(),
      photo,
      description,
      type,
      author_id: verifiedToken.id,
    };

    await this.userDb.createPost(newPost);

    return newPost;
  };
}
