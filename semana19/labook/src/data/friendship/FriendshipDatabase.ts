import { Friendship } from "../../model/friendship";
import { BaseDatabase } from "../BaseDatabase";

export class FriendshipDatabase extends BaseDatabase {
  private tableName: string = "friendship_labook";

  makeFriendship = async (data: Friendship) => {
    await this.connection(this.tableName).insert(data);
  };
}
