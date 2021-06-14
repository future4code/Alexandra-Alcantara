export type authenticationData = {
  id: string;
};

export interface userAddressRequest {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface userAddressDb extends userAddressRequest {
  id: string;
  complement?: string;
  number: string;
  cep: string;
  user_id: string;
}

export type user = {
  id: string;
  email: string;
  password: string;
};
