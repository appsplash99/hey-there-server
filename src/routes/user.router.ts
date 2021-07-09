import { Router } from 'express';
import {
  getOneUser,
  updateOneUser,
  deleteOneUser,
  followOneUser,
  unfollowOneUser,
} from '../controllers/user.controller';

const router = Router();

router
  .get('/:userId', getOneUser)
  .post('/:userId', updateOneUser)
  .delete('/:userId', deleteOneUser)
  .post('/:otherUserId/follow', followOneUser)
  .post('/:otherUserId/unfollow', unfollowOneUser);

export { router as userRoutes };
