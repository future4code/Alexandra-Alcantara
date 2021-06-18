export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string
  ) {}
}

export interface UserDTO {
  name: any;
  email: any;
  password: any;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginDTO {
  email: any;
  password: any;
}
