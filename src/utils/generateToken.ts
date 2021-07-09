import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/constants';
import { IUser } from '../interfaces/user.interface';

// create + assign a JWT token
// with userId and TOKEN_SECRET
export const generateToken = (user: IUser): string => {
  return jwt.sign({ _id: user._id }, jwtSecret);
};
