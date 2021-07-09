import { Schema, model } from 'mongoose';
import { IPost } from '../interfaces/post.interface';

export const postSchema = new Schema<IPost>(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const Post = model<IPost>('Post', postSchema);
