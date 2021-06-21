import { User } from "../src/model/user";
import { performPurchase } from "../src/performPurchase";

describe("Testing performPurchase function", () => {
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Amelie",
      balance: 100,
    };
    const result = performPurchase(user, 40);
    expect(result).toEqual({
      name: "Amelie",
      balance: 60,
    });
  });
  test("Testing balance equal than value", () => {
    const user: User = {
      name: "Amelie",
      balance: 100,
    };
    const result = performPurchase(user, 100);
    expect(result).toEqual({
      name: "Amelie",
      balance: 0,
    });
  });
  test("Testing balance less than value", () => {
    const user: User = {
      name: "Amelie",
      balance: 100,
    };
    const result = performPurchase(user, 150);
    expect(result).toBeUndefined();
  });
});
