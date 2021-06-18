import { User } from "../../model/user";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private tableName: string = "users_labook";

  createUser = async (user: User) => {
    await this.connection(this.tableName).insert(user);
  };

  getUserByEmail = async (email: string) => {
    const [result] = await this.connection(this.tableName).where({ email });

    return result;
  };

  login = async (email: string) => {
    const result = await this.connection(this.tableName)
      .select("*")
      .where("email", `${email}`);

    return result[0];
  };
}
