import { Post, PostDataDTO } from "../../model/post";
import { generateId } from "../../services/idGenerator";
import { PostDatabase } from "../../data/post/PostDatabase";
import { getTokenData } from "../../services/authenticator";
import CreatePostValidations from "./validations/CreatePostValidations";

export default class CreatePostBusiness extends CreatePostValidations {
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
