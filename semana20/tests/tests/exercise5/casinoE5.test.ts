import { User, NATIONALITY, Casino, LOCATION } from "../../src/model/casino";
import { verifyAge } from "../../src/exercise3/verifyAge";

describe("Testing casino function", () => {
  test("Testing a Brazilian allowed user in a Brazilian casino", () => {
    const brazilianUser: User = {
      name: "Amèlie",
      age: 18,
      nationality: NATIONALITY.BRAZILIAN,
    };

    const brazilianCasino: Casino = {
      name: "Grape Party",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(brazilianCasino, [brazilianUser]);

    expect(result.brazilians.allowed).toHaveLength(1);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  test("Testing an American allowed user in a Brazilian casino", () => {
    const americanUser: User = {
      name: "Ravioli",
      age: 18,
      nationality: NATIONALITY.AMERICAN,
    };

    const brazilianCasino: Casino = {
      name: "Grape Party",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(brazilianCasino, [americanUser]);

    expect(result.americans.unallowed).toHaveLength(0);
    expect(result.americans.unallowed.length).toEqual(0);
  });

  test("Testing not allowed users in an American casino", () => {
    const brazilianUser1: User = {
      name: "Tony Stark",
      age: 19,
      nationality: NATIONALITY.BRAZILIAN,
    };

    const brazilianUser2: User = {
      name: "Mary Daisy",
      age: 19,
      nationality: NATIONALITY.BRAZILIAN,
    };

    const americanUser1: User = {
      name: "Max Jerry",
      age: 19,
      nationality: NATIONALITY.AMERICAN,
    };

    const americanUser2: User = {
      name: "Natasha Romanoff",
      age: 19,
      nationality: NATIONALITY.AMERICAN,
    };

    const americanCasino: Casino = {
      name: "Strawberry Party",
      location: LOCATION.USA,
    };

    const result = verifyAge(americanCasino, [
      brazilianUser1,
      brazilianUser2,
      americanUser1,
      americanUser2,
    ]);

    expect(result.brazilians.unallowed).toContain("Mary Daisy");
    expect(result.americans.unallowed).toContain("Max Jerry");
  });

  test("Testing 2 allowed and 2 not allowed users in an American casino", () => {
    const brazilianUser1: User = {
      name: "Tony Stark",
      age: 19,
      nationality: NATIONALITY.BRAZILIAN,
    };

    const brazilianUser2: User = {
      name: "Mary Daisy",
      age: 19,
      nationality: NATIONALITY.BRAZILIAN,
    };

    const americanUser1: User = {
      name: "Max Jerry",
      age: 21,
      nationality: NATIONALITY.AMERICAN,
    };

    const americanUser2: User = {
      name: "Natasha Romanoff",
      age: 21,
      nationality: NATIONALITY.AMERICAN,
    };

    const americanCasino: Casino = {
      name: "Strawberry Party",
      location: LOCATION.USA,
    };

    const result = verifyAge(americanCasino, [
      brazilianUser1,
      brazilianUser2,
      americanUser1,
      americanUser2,
    ]);

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed).toHaveLength(2);
  });
});
