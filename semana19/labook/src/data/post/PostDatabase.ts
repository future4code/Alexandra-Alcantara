import { PostData } from "../../model/post";
import { BaseDatabase } from "../BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private tableName: string = "posts_labook";

  createPost = async (post: PostData) => {
    await this.connection(this.tableName).insert(post);
  };
}
