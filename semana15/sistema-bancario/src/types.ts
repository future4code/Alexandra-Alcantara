export type Transaction = {
  value: number;
  date: Date;
  description: string;
};

export type Account = {
  name: string;
  CPF: number;
  dateOfBirth: Date;
  balance: number;
  statement: Array<Transaction>;
};
