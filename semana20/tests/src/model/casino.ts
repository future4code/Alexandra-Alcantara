export enum LOCATION {
  BRAZIL = "BRAZIL",
  USA = "USA",
}

export enum NATIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nationality: NATIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}
