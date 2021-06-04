export type Transaction = {
  value: number;
  date: Date;
  description: string;
};

export type Account = {
  name: string;
  CPF: string;
  dateOfBirth: string;
  balance: number;
  statement: Array<Transaction>;
};
