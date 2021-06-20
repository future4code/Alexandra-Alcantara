import { resourceLimits } from "node:worker_threads";
import { UserDatabase } from "../../data/user/UserDatabase";
import { User, UserDTO } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateHash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import SignUpValidation from "./validations/SignUpValidations";

export default class SignUpBusiness extends SignUpValidation {
  private userDb: UserDatabase = new UserDatabase();

  private checkEmail = async (email: string) => {
    const [user] = await this.userDb.getUserByEmail(email);
    if (user) {
      throw new Error("Something got wrong, try again or try another email.");
    }
  };

  createUserBusiness = async (data: UserDTO) => {
    const { name, email, password } = this.signUpInputValidation(data);

    await this.checkEmail(email);

    const newUser: User = {
      id: generateId(),
      name,
      email,
      password: generateHash(password),
    };

    const token: string = generateToken({
      id: newUser.id,
    });

    await this.userDb.createUser(newUser);

    return token;
  };
}
