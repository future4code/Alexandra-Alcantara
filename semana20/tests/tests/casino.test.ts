import { User, NATIONALITY, Casino, LOCATION } from "../src/model/casino";
import { verifyAge } from "../src/verifyAge";

describe("Testing casino function", () => {
  test("Testing a Brazilian allowed user in a Brazilian casino", () => {
    const brazilianUser: User = {
      name: "Ravioli",
      age: 18,
      nationality: NATIONALITY.BRAZILIAN,
    };

    const brazilianCasino: Casino = {
      name: "Grape Party",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(brazilianCasino, [brazilianUser]);

    expect(result.brazilians.allowed).toEqual(["Ravioli"]);
  });

  test("Testing an American allowed user in a Brazilian casino", () => {
    const americanUser: User = {
      name: "Amèlie",
      age: 18,
      nationality: NATIONALITY.AMERICAN,
    };

    const brazilianCasino: Casino = {
      name: "Grape Party",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(brazilianCasino, [americanUser]);

    expect(result.americans.allowed).toEqual(["Amèlie"]);
  });

  test("Testing 2 Americans and  2 Brazilians users in an American casino", () => {
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

    expect(result.brazilians.unallowed).toEqual(["Tony Stark", "Mary Daisy"]);
    expect(result.americans.unallowed).toEqual([
      "Max Jerry",
      "Natasha Romanoff",
    ]);
  });

  test("Testing 2 Americans and  2 Brazilians users in an American casino", () => {
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

    expect(result.brazilians.unallowed).toEqual(["Tony Stark", "Mary Daisy"]);
    expect(result.americans.allowed).toEqual(["Max Jerry", "Natasha Romanoff"]);
  });
});
