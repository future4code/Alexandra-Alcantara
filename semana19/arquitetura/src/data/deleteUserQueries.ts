import connection from "./connection";

// REMOVE ALL FOLLOWER DATA
export const removeAllFollowerUserReferences = async (
  id: string
): Promise<any> => {
  await connection("followers").delete(id).where("follower_id", `${id}`);
};

// REMOVE ALL FOLLOWED DATA
export const removeAllFollowedUserReferences = async (
  id: string
): Promise<any> => {
  await connection("followers").delete(id).where("followed_id", `${id}`);
};

// DELETE USER
export const deleteUser = async (id: string): Promise<any> => {
  await connection("users").delete(id).where("id", id);
};
