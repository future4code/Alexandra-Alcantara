import { FriendshipDatabase } from "../../data/friendship/FriendshipDatabase";
import { Friendship } from "../../model/friendship";
import { getTokenData } from "../../services/authenticator";

export default class MakeFriendshipBusiness {
  private friendshipDb: FriendshipDatabase = new FriendshipDatabase();

  makeFriendshipBusiness = async (
    recipient_request_id: string,
    token: string
  ) => {
    const verifiedToken = getTokenData(token);

    if (!verifiedToken) {
      throw new Error("Unauthorized");
    }

    const newFriendship: Friendship = {
      sender_request_id: verifiedToken.id,
      recipient_request_id: recipient_request_id,
    };

    await this.friendshipDb.makeFriendship(newFriendship);

    return newFriendship;
  };
}
