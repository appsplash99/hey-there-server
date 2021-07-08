import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import { IRequest, IResponse } from '@src/interfaces/express.interface';

export const addNewUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    // creating new user
    const user = new UserModel({
      name: 'Bill',
      email: 'bill@initech.com',
      avatar: 'https://i.imgur.com/dM7Thhn.png',
    });

    console.log('created newUser');
    console.log(user);

    // saving user
    const savedUser = await user.save();
    console.log('user saved');

    return res.status(200).json({ success: true, savedUser, user });
  } catch (error) {
    console.log('failed to save user', error);
    return res.status(500).json({ success: false });
  }
};

export const getUser = async (req: IRequest, res: IResponse): Promise<void> => {
  // get a user
  try {
    const { userId } = req;
    console.log(userId);
    const user = await UserModel.findOne({ _id: userId });
    res.json({ success: true, message: 'user data loaded', user });
  } catch (error) {
    res.json({ success: false, message: 'Unable to load data', error });
  }
};
