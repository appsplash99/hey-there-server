import { Router } from 'express';
import {
  createNewPost,
  getOnePost,
  updateOnePost,
  deleteOnePost,
  likeOrDislikeOnePost,
  // getAllTimelinePosts,
} from '@src/controllers/post.controller';

const router = Router();

router
  // .get('/timeline', getAllTimelinePosts)
  .get('/', getOnePost)
  .post('/:postId', createNewPost)
  .post('/:postId', updateOnePost)
  .delete('/:postId', deleteOnePost)
  .post('/:postId/like', likeOrDislikeOnePost);

export { router as postRoutes };
