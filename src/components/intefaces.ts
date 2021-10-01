export interface PostObjectWithoutUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostObject extends PostObjectWithoutUser {
  authorName: string;
}

export interface UserObject {
  id: number;
  name: string;
}
