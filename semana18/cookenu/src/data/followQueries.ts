import connection from "./connection";
import { follow } from "../types/follow";

// FOLLOW USER
export const followUser = async (follow: follow): Promise<any> => {
  await connection("followers").insert(follow);
};

// UNFOLLOW USER
export const unfollowUser = async (
  followed_id: string,
  follower_id: string
): Promise<any> => {
  await connection("followers")
    .delete(followed_id)
    .where("followed_id", followed_id)
    .andWhere("follower_id", follower_id);
};
