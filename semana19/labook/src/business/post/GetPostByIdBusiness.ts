import { PostDatabase } from "../../data/post/PostDatabase";
import { getTokenData } from "../../services/authenticator";

export default class GetPostByIdBusiness {
  private postDb: PostDatabase = new PostDatabase();

  private checkIfPostExists = async (id: string) => {
    const post = await this.postDb.getPostById(id);

    if (!post) {
      throw new Error("Post not found :/");
    }
  };

  getPostByIdBusiness = async (id: string, token: string) => {
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      throw new Error("Unauthorized");
    }

    this.checkIfPostExists(id);

    const post = await this.postDb.getPostById(id);

    return post;
  };
}
