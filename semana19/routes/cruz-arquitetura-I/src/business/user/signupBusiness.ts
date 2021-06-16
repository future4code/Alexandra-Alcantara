import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { signUpInputDTO } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";
import { signUpInputValidation } from "./validations/signUpValidations";

export const signUpBusiness = async (
  userData: signUpInputDTO
): Promise<string> => {
  const user = signUpInputValidation(userData);

  const cypherPassword = await hash(user.password);

  const newUser = {
    ...user,
    password: cypherPassword,
    id: generateId(),
  };

  await insertUser(newUser);

  const token: string = generateToken({
    id: newUser.id,
    role: user.role,
  });

  return token;
};
