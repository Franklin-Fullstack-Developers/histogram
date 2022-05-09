export interface Post {
  id: number;
  userId: number;
  body: string;
  createdAt: Date;
  likes: number;
}