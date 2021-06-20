import FeedDatabase from "../../data/FeedDatabase";
import { FeedData } from "../../model/feed";
import { getTokenData } from "../../services/authenticator";
import { formatData } from "../../utils/formatData";

export default class GetFeedBusiness {
  private feedDb: FeedDatabase = new FeedDatabase();

  getFeed = async (token: string) => {
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      throw new Error("Unauthorized");
    }

    const feed = await this.feedDb.getFeed(verifiedToken.id);

    const feedList = feed.map((item: FeedData) => {
      return {
        id: item.id,
        authorName: item.name,
        photo: item.photo,
        description: item.description,
        type: item.type,
        createdAt: formatData(item.created_at),
        authorId: item.author_id,
      };
    });

    return feedList;
  };
}
