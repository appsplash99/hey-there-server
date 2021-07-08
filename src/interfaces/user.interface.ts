import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  coverPicture?: string;
  followers?: string[];
  followings?: string[];
  isAdmin?: boolean;
  desc?: string;
  city?: string;
  from?: string;
  relationship?: number;
}
