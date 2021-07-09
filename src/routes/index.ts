import express from 'express';
// Routes
import { userRoutes } from './user.router';
import { loginRoutes } from './login.router';
import { registerRoutes } from './register.router';
import { postRoutes } from './post.router';
import { IRequest, IResponse } from '../interfaces/express.interface';

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
