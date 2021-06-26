import FriendshipDatabase from "../../data/FriendshipDatabase";
import { Friendship } from "../../model/friendship";
import { getTokenData } from "../../services/authenticator";

export default class MakeFriendshipBusiness {
  private friendshipDb: FriendshipDatabase = new FriendshipDatabase();

  private checkIfAlreadyFriends = async (
    recipient_request_id: string,
    user_request_id: string
  ) => {
    const friendship = await this.friendshipDb.getUserById(
      recipient_request_id,
      user_request_id
    );
    if (friendship) {
      throw new Error("Already friends");
    }

    if (recipient_request_id === user_request_id) {
      throw new Error(
        "We know you're your best friend, but we can't add it in our database, sorry"
      );
    }
  };

  makeFriendshipBusiness = async (
    recipient_request_id: string,
    token: string
  ) => {
    const verifiedToken = getTokenData(token);

    await this.checkIfAlreadyFriends(recipient_request_id, verifiedToken.id);

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
