import connection from "../data/connection";
import { follow } from "../types/follow";

// Função para seguir usuário
export const followUser = async (follow: follow): Promise<any> => {
  await connection("followers").insert(follow);
};

// Função para um usuário deixar de seguir outro
export const unfollowUser = async (
  followed_id: string,
  follower_id: string
): Promise<any> => {
  await connection("followers")
    .delete(followed_id)
    .where("followed_id", followed_id)
    .andWhere("follower_id", follower_id);
};

// Remover todos os registros de follower
export const removeAllFollowerUserReferences = async (
  id: string
): Promise<any> => {
  await connection("followers").delete(id).where("follower_id", `${id}`);
};

// Remover todos os registros de followed
export const removeAllFollowedUserReferences = async (
  id: string
): Promise<any> => {
  await connection("followers").delete(id).where("followed_id", `${id}`);
};

// Função para deletar usuários
export const deleteUser = async (id: string): Promise<any> => {
  await connection("users").delete(id).where("id", id);
};

// Função para resetar senha do usuário
export const resetPassword = async (): Promise<void> => {};
