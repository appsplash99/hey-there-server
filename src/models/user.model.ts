import { Schema, model } from 'mongoose';
// TODO: remove comments
// 1. Create an interface representing a document in MongoDB.
import { IUser } from '@src/interfaces/user.interface';

// 2. Create a Schema corresponding to the document interface.
export const userSchema = new Schema<IUser>(
  {
    username: { type: String, require: true, min: 3, max: 20, unique: true },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, required: true, min: 6 },
    profilePicture: { type: String, default: '' },
    coverPicture: { type: String, default: '' },
    followers: { type: Array, default: [] },
    followings: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    desc: { type: String, max: 50 },
    city: { type: String, max: 50 },
    from: { type: String, max: 50 },
    relationship: { type: Number, enum: [1, 2, 3] },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const UserModel = model<IUser>('User', userSchema);
