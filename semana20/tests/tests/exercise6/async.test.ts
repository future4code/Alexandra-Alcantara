import { Post, POST_TYPES } from "../../src/model/post";
import { generateId } from "../../src/services/idGenerator";
import { PostDatabase } from "../../src/data/PostDatabase";
import { BaseDatabase } from "../../src/data/BaseDatabase";

describe("Testing async functions", () => {
  afterAll(async () => {
    await new BaseDatabase().close();
  });

  test("Create Post", async () => {
    const postDatabase = new PostDatabase();
    const post: Post = {
      id: generateId(),
      photo: "teste.jpg",
      description: "teste assíncrono",
      type: POST_TYPES.NORMAL,
      author_id: "a2d34cab-97e3-482e-ba97-47e63d53bf11",
    };

    await postDatabase.createPost(post);
    const postFromDb = await postDatabase.getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      id: post.id,
      photo: "teste.jpg",
      description: "teste assíncrono",
    });
  });
});
