import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/authentication";

export function generateToken(payload: authenticationData): string {
  return jwt.sign(payload, "ale", {
    expiresIn: "1y",
  });
}

export function getTokenData(token: string): authenticationData {
  const result: authenticationData = jwt.verify(
    token,
    "ale"
  ) as authenticationData;

  return result;
}
