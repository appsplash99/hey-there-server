import { Router } from 'express';
import {
  getOneUser,
  updateOneUser,
  deleteOneUser,
  followOneUser,
  unfollowOneUser,
} from '@src/controllers/user.controller';

const router = Router();

router
  .get('/:userId', getOneUser)
  .post('/:userId', updateOneUser)
  .post('/:userId', followOneUser)
  .post('/:userId', unfollowOneUser)
  .delete('/:userId', deleteOneUser);

export { router as userRoutes };
