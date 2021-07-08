// import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { IRequest, IResponse } from '@src/interfaces/express.interface';
import { resJson } from '@src/utils/responseHelpers';

export const createNewPost = async (req: IRequest, res: IResponse) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return resJson(res, 200, true, 'Successfully Created New Post', 'no error', savedPost);
  } catch (err) {
    return resJson(res, 500, false, 'Failed to Created New Post', err);
  }
};

export const updateOnePost = async (req: IRequest, res: IResponse) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post?.userId === req.body.userId) {
      if (post) {
        const updatedPost = await post.updateOne({ $set: req.body });
        return resJson(res, 200, true, 'Post Successfully updated', 'no error', updatedPost);
      }
    } else {
      return resJson(res, 403, false, 'you can update only your post', 'user error');
    }
  } catch (err) {
    return resJson(res, 500, false, 'Unable to Update the Post', err);
  }
};

export const deleteOnePost = async (req: IRequest, res: IResponse) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post?.userId === req.body.userId) {
      if (post) {
        const deletedPost = await post.deleteOne();
        return resJson(res, 200, true, 'the post has been deleted', 'no error', deletedPost);
      }
    } else {
      return resJson(res, 403, false, 'you can delete only your post', 'user error');
    }
  } catch (err) {
    return resJson(res, 500, false, 'you can delete only your post', err);
  }
};

export const likeOrDislikeOnePost = async (req: IRequest, res: IResponse) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post?.likes.includes(req.body.userId)) {
      if (post) {
        const likedPost = await post.updateOne({ $push: { likes: req.body.userId } });
        return resJson(res, 200, true, 'Liked Post Successfully!', 'no error', likedPost);
      }
    }
    if (post) {
      const dislikedPost = await post.updateOne({ $pull: { likes: req.body.userId } });
      return resJson(res, 200, true, 'Disliked Post Successfully!', 'no error', dislikedPost);
    }
  } catch (err) {
    return resJson(res, 500, true, 'Unable to Like/Dislike the POst', err);
  }
};

export const getOnePost = async (req: IRequest, res: IResponse) => {
  try {
    const post = await Post.findById(req.params.postId);
    return resJson(res, 200, true, 'Successfully Found One Post', 'no error', post);
  } catch (err) {
    return resJson(res, 500, false, 'Failed to Find the Post', err);
  }
};

// export const getAllTimelinePosts = async (req: IRequest, res: IResponse) => {
//   try {
//     const currentUser = await User.findById(req.body.userId);
//     const userPosts = await Post.find({ userId: currentUser?._id });
//     const friendPosts = await Promise.all(
//       currentUser?.followings?.map((friendId: string) => {
//         return Post.find({ userId: friendId });
//       })
//     );
//     res.json(userPosts.concat(...friendPosts));
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
