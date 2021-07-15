import express from 'express';
// Routes
import { userRoutes } from './user.router';
import { loginRoutes } from './login.router';
import { registerRoutes } from './register.router';
import { postRoutes } from './post.router';
import { IRequest, IResponse } from '../interfaces/express.interface';
import { verifyToken } from '../middlewares/verifyToken.middleware';

// initialize router
const router = express.Router();

/** GET api/status */
router.get('/status', (req: IRequest, res: IResponse) => res.send('OK'));

/** PUBLIC ROUTES */
router.use('/login', loginRoutes);
router.use('/register', registerRoutes);

/** PRIVATE ROUTES */
router.use('/users', verifyToken, userRoutes);
router.use('/posts', verifyToken, postRoutes);

export { router as apiRoutes };
