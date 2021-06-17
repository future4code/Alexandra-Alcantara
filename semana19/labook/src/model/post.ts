enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

type post = {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt: Date;
  authorId: string;
};
