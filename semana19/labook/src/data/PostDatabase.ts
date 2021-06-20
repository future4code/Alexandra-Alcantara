import { PostData } from "../model/post";
import BaseDatabase from "./BaseDatabase";

export default class PostDatabase extends BaseDatabase {
  private tableName: string = "posts_labook";

  createPost = async (post: PostData) => {
    await this.connection(this.tableName).insert(post);
  };

  getPostById = async (id: string) => {
    const [queryResult] = await this.connection(this.tableName)
      .select("*")
      .where({ id });

    return queryResult;
  };
}
