import { Character } from "../model/character";

export const validateCharacter = (input: Character): boolean => {
  if (!input.name || !input.life || !input.strength || !input.defense) {
    return false;
  }

  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }
  return true;
};
