import { genSaltSync, hashSync, compareSync } from "bcryptjs";

export const generateHash = (plainText: string): string => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt: string = genSaltSync(rounds);
  const hash: string = hashSync(plainText, salt);

  return hash;
};

export const compareHash = (plainText: string, cypherText: string): boolean => {
  return compareSync(plainText, cypherText);
};
