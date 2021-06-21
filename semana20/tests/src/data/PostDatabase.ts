import { PostData } from "../model/post";
import { BaseDatabase } from "../data/BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private tableName: string = "posts_labook";

  createPost = async (post: PostData) => {
    await this.connection(this.tableName).insert(post);
  };

  getPostById = async (id: string) => {
    const [queryResult] = await this.connection(this.tableName)
      .select("id", "photo", "description")
      .where({ id });

    return queryResult;
  };
}
