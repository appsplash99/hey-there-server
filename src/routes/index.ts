import express from 'express';
// Routes
import { userRoutes } from './user.router';
import { loginRoutes } from '@src/routes/login.router';
import { registerRoutes } from '@src/routes/register.router';
import { postRoutes } from '@src/routes/post.router';
import { IRequest, IResponse } from '@src/interfaces/express.interface';

// initialize router
const router = express.Router();

/** GET api/status */
router.get('/status', (req: IRequest, res: IResponse) => res.send('OK'));

/** PUBLIC ROUTES */
router.use('/login', loginRoutes);
router.use('/register', registerRoutes);

/** PRIVATE ROUTES
 * TODO: ADD JWT MIDDLEWARE BELOW
 */
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export { router as apiRoutes };
