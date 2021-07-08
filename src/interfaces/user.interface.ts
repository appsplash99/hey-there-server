export interface IUser {
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: [];
  followings: [];
  isAdmin: boolean;
  desc: string;
  city: string;
  from: string;
  relationship: number;
}
