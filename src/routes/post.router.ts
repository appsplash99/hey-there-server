import { Router } from 'express';
import {
  createNewPost,
  getOnePost,
  updateOnePost,
  deleteOnePost,
  likeOrDislikeOnePost,
  getAllTimelinePosts,
} from '@src/controllers/post.controller';

const router = Router();

router
  .get('/timeline/all', getAllTimelinePosts)
  .post('/', createNewPost)
  .get('/:postId', getOnePost)
  .post('/:postId', updateOnePost)
  .delete('/:postId', deleteOnePost)
  .post('/:postId/like', likeOrDislikeOnePost);

export { router as postRoutes };
