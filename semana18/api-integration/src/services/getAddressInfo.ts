import axios from "axios";
import { userAddress } from "../types";

export const getAddressInfo = async (
  cep: string
): Promise<userAddress | null> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const address: userAddress = {
      city: response.data.localidade,
      neighborhood: response.data.bairro,
      state: response.data.uf,
      street: response.data.logradouro,
    };
    return address;
  } catch (err) {
    return null;
  }
};
