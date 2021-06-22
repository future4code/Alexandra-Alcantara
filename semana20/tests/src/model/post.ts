export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export interface Post {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  author_id: string;
}

export interface PostData {
  photo: string;
  description: string;
  type: POST_TYPES;
}

export interface PostDataDTO {
  photo: any;
  description: any;
  type: any;
}
