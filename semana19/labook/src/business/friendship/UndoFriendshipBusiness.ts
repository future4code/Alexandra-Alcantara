import FriendshipDatabase from "../../data/FriendshipDatabase";
import { getTokenData } from "../../services/authenticator";

export default class undoFriendshipBusiness {
  private friendshipDb: FriendshipDatabase = new FriendshipDatabase();

  private checkIfFriendshipExists = async (
    recipient_request_id: string,
    user_request_id: string
  ) => {
    const friendship = await this.friendshipDb.getUserById(
      recipient_request_id,
      user_request_id
    );
    if (!friendship) {
      throw new Error("Friendship not found");
    }
  };

  undoFriendshipBusiness = async (
    recipient_request_id: string,
    token: string
  ) => {
    const verifiedToken = getTokenData(token);

    await this.checkIfFriendshipExists(recipient_request_id, verifiedToken.id);

    if (!verifiedToken) {
      throw new Error("Unauthorized");
    }

    const sender_request_id = verifiedToken.id;

    const result = await this.friendshipDb.undoFriendship(
      sender_request_id,
      recipient_request_id
    );

    return result;
  };
}
