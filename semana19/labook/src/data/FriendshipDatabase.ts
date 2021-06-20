import { Friendship } from "../model/friendship";
import BaseDatabase from "./BaseDatabase";

export default class FriendshipDatabase extends BaseDatabase {
  private tableName: string = "friendship_labook";

  // Make friendship
  makeFriendship = async ({
    sender_request_id,
    recipient_request_id,
  }: Friendship) => {
    await this.connection(this.tableName).insert({
      sender_request_id,
      recipient_request_id,
    });
    await this.connection(this.tableName).insert({
      sender_request_id: recipient_request_id,
      recipient_request_id: sender_request_id,
    });
  };

  // Undo friendship
  undoFriendship = async (
    sender_request_id: string,
    recipient_request_id: string
  ) => {
    await this.connection(this.tableName)
      .delete(recipient_request_id)
      .where({ sender_request_id })
      .andWhere({ recipient_request_id })
      .orWhere("sender_request_id", recipient_request_id)
      .andWhere("recipient_request_id", sender_request_id);
  };

  // Get user by id
  getUserById = async (
    recipient_request_id: string,
    sender_request_id: string
  ) => {
    const [result] = await this.connection(this.tableName)
      .where({
        recipient_request_id,
      })
      .andWhere({ sender_request_id })
      .orWhere("sender_request_id", recipient_request_id)
      .andWhere("recipient_request_id", sender_request_id);

    return result;
  };
}
