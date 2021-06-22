import { validatorMockSuccess } from "../mocks/validatorMock";
import { performAttack } from "../../src/exercise3/performAttack";
import {
  attackerCharacterMock,
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
