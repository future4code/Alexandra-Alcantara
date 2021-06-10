import axios from "axios";
import { userAddressRequest } from "../types";

export const getAddressInfo = async (
  cep: string
): Promise<userAddressRequest> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const address: userAddressRequest = {
      city: response.data.localidade,
      neighborhood: response.data.bairro,
      state: response.data.uf,
      street: response.data.logradouro,
    };
    return address;
  } catch (err) {
    throw new Error(err.message);
  }
};
