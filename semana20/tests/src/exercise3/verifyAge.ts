import { Casino, LOCATION, NATIONALITY, Result } from "../model/casino";
import { User } from "../model/casino";

export const verifyAge = (casino: Casino, users: User[]): Result => {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.USA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
        .map((user) => user.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nationality === NATIONALITY.AMERICAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nationality === NATIONALITY.AMERICAN)
        .map((user) => user.name),
    },
  };
};
