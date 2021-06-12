import { connection } from "../services/connection";
import { user, follow } from "../types";

// Função para criar o usuário
export const createUser = async (user: user): Promise<any> => {
  await connection("users").insert(user);
};

// Função para buscar usuário pelo id
export const searchUserById = async (id: string): Promise<any> => {
  const result = await connection("users")
    .select("id", "name", "email")
    .where("id", `${id}`);

  return result[0];
};

// Função para seguir usuário
export const followUser = async (follow: follow): Promise<any> => {
  await connection("followers").insert(follow);
};

// Função para deixar de seguir usuário
export const unfollowUser = async (followed_id: string): Promise<any> => {
  await connection("followers")
    .delete(followed_id)
    .where("followed_id", `${followed_id}`);
};
