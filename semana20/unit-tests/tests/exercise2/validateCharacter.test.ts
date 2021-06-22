import { validateCharacter } from "../../src/exercise1/validateCharacter";

describe("Testing validateCharacter function", () => {
  test("Return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1000,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  test("Return false for life equal to zero", () => {
    const result = validateCharacter({
      name: "Ale",
      life: 0,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  test("Return false for strength equal to zero", () => {
    const result = validateCharacter({
      name: "Ale",
      life: 1000,
      strength: 0,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  test("Return false for defense equal to zero", () => {
    const result = validateCharacter({
      name: "Ale",
      life: 1000,
      strength: 300,
      defense: 0,
    });
    expect(result).toBe(false);
  });

  test("Return false for negative value in life, strength or defense", () => {
    const result = validateCharacter({
      name: "Ale",
      life: -1000,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  test("Return true for correct values in life, strength and defense", () => {
    const result = validateCharacter({
      name: "Ale",
      life: 1000,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(true);
  });
});
