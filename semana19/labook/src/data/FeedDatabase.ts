import BaseDatabase from "./BaseDatabase";

export default class FeedDatabase extends BaseDatabase {
  private tableName: string = "posts_labook";

  // Get feed
  getFeed = async (id: string) => {
    const result = await this.connection(this.tableName)
      .select(
        "users_labook.id",
        "users_labook.name",
        "photo",
        "description",
        "type",
        "created_at",
        "author_id"
      )
      .join("users_labook", "users_labook.id", "author_id")
      .join("friendship_labook", "recipient_request_id", "author_id")
      .where("sender_request_id", id)
      .orderBy("created_at", "desc");

    return result;
  };
}
