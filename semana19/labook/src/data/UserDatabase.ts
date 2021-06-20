import { User } from "../model/user";
import BaseDatabase from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  private tableName: string = "users_labook";

  // Create user
  createUser = async (user: User) => {
    await this.connection(this.tableName).insert(user);
  };

  // Get user by email
  getUserByEmail = async (email: string) => {
    const result = await this.connection(this.tableName).where({ email });

    return result;
  };

  // Login
  login = async (email: string) => {
    const result = await this.connection(this.tableName)
      .select("*")
      .where("email", `${email}`);

    return result[0];
  };
}
