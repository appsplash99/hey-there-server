import { User } from '../models/user.model';
import { IRequest, IResponse } from '@src/interfaces/express.interface';
import { generateHashedPassword } from '@src/utils/generateHashedPassword';
import { resJson } from '@src/utils/responseHelpers';

// get a user
export const getOneUser = async (req: IRequest, res: IResponse): Promise<void> => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ _id: userId });
    res.json({ success: true, message: 'user data loaded', user });
  } catch (error) {
    res.json({ success: false, message: 'Unable to load data', error });
  }
};

// update user
export const updateUser = async (req: IRequest, res: IResponse): Promise<IResponse> => {
  if (req.body.userId === req.params.userId || req.body.isAdmin) {
    if (req.body.password)
      try {
        req.body.password = await generateHashedPassword(req.body.password);
      } catch (err) {
        return resJson(res, 500, false, 'Failed to Generate Hashed Password', err);
      }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $set: req.body });
      return resJson(res, 200, true, 'Account has been updated', 'no error', updatedUser);
    } catch (err) {
      return resJson(res, 500, false, err);
    }
  } else {
    return resJson(res, 403, false, 'You can update only your account!');
  }
};

// delete user
export const deleteOneUser = async (req: IRequest, res: IResponse) => {
  if (req.body.userId === req.params.userId || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.userId);
      resJson(res, 200, true, 'Account has been deleted', 'no error');
    } catch (err) {
      return resJson(res, 500, false, err);
    }
  } else {
    return resJson(res, 403, false, 'You can delete only your account!');
  }
};

// follow one User

export const followOneUser = async (req: IRequest, res: IResponse) => {
  if (req.body.userId !== req.params.userId) {
    try {
      const user = await User.findById(req.params.userId);
      const currentUser = await User.findById(req.body.userId);
      if (!user?.followers?.includes(req.body.userId)) {
        if (user) await user.updateOne({ $push: { followers: req.body.userId } });
        if (currentUser) await currentUser.updateOne({ $push: { followings: req.params.userId } });
        resJson(res, 200, true,'user has been followed', 'no error');
      } else {
        resJson(res, 403, false,'you allready follow this user', 'no error');
      }
    } catch (err) {
      resJson(res, 500, false, 'Unable to follow User', err);
    }
  } else {
    resJson(res, 403, false,'you cant follow yourself', 'no error');
  }
};

// unfollow a user

export const unfollowOneUser = async (req: IRequest, res: IResponse) => {
  if (req.body.userId !== req.params.userId) {
    try {
      const user = await User.findById(req.params.userId);
      const currentUser = await User.findById(req.body.userId);
      if (user?.followers?.includes(req.body.userId)) {
        if (user) await user.updateOne({ $pull: { followers: req.body.userId } });
        if (currentUser) await currentUser.updateOne({ $pull: { followings: req.params.userId } });
        resJson(res, 200, true,'user has been unfollowed', 'no error');
      } else {
        resJson(res, 403, false,'you dont follow this user', 'no error');
      }
    } catch (err) {
      resJson(res, 500, false, 'Un-follow Unsuccessful',err);
    }
  } else {
    resJson(res, 403, false,'you cant unfollow yourself'));
  }
};
