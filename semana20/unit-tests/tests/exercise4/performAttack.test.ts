import { validatorMockSuccess } from "../mocks/validatorMock";
import { performAttack } from "../../src/exercise3/performAttack";
import {
  attacker2CharacterMock,
  attackerCharacterMock,
  defender2CharacterMock,
  defenderCharacterMock,
} from "../mocks/characterMock";
test("Input válido", () => {
  performAttack(
    attackerCharacterMock,
    defenderCharacterMock,
    validatorMockSuccess
  );

  expect(validatorMockSuccess).toHaveBeenCalled();
  expect(validatorMockSuccess).toHaveBeenCalledTimes(2);
  expect(validatorMockSuccess).toHaveReturned();
  expect(defenderCharacterMock.life).toBeLessThan(300);
});

test("Input inválido", () => {
  try {
    performAttack(
      attacker2CharacterMock,
      defender2CharacterMock,
      validatorMockSuccess
    );
  } catch (error) {
    expect(error.message).toBe("Invalid character");
    expect(validatorMockSuccess).toHaveBeenCalledTimes(1);
    expect(validatorMockSuccess).toHaveReturned();
  }
});
