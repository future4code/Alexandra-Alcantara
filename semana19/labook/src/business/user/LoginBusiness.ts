import { UserDatabase } from "../../data/user/UserDatabase";
import { LoginDTO } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { compareHash } from "../../services/hashManager";
import LoginValidation from "./validations/LoginValidations";

export default class LoginBusiness extends LoginValidation {
  private userDb: UserDatabase = new UserDatabase();

  // Check if email is already registered
  private checkAccess = async (email: string, password: string) => {
    const user = await this.userDb.login(email);

    if (!user) {
      throw new Error("User not found :/");
    }

    const passwordIsCorrect: boolean = compareHash(password, user.password);

    if (!passwordIsCorrect) {
      throw new Error("Invalid credentials :/");
    }
  };

  // Connect with database to do login
  loginBusiness = async (data: LoginDTO) => {
    const { email, password } = this.loginInputValidation(data);
    this.checkAccess(email, password);

    const user = await this.userDb.login(email);

    if (!user) {
      throw new Error("User not found :/");
    }

    const passwordIsCorrect: boolean = compareHash(password, user.password);

    if (!passwordIsCorrect) {
      throw new Error("Invalid credentials :/");
    }

    const token: string = generateToken({
      id: user.id,
    });

    return token;
  };
}
