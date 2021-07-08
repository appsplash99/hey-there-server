import { Document } from 'mongoose';

export interface IPost extends Document {
  userId: string;
  desc?: string;
  img: string;
  likes: [];
}
