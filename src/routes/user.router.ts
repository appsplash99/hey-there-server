import { Router } from 'express';
import { getOneUser, updateUser, deleteOneUser, followOneUser, unfollowOneUser } from '../controllers/user.controller';

const router = Router();

router
  .get('/', getOneUser)
  .post('/:userId', updateUser)
  .post('/:userId', followOneUser)
  .post('/:userId', unfollowOneUser)
  .delete('/:userId', deleteOneUser);

export { router as userRoutes };
