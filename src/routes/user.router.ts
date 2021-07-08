import { Router } from 'express';
import { addNewUser, getUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getUser).post('/add-user', addNewUser);

export { router as userRoutes };
