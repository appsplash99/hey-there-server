import { Router } from 'express';
import { registerNewUser } from '../controllers/register.controller';

const router = Router();

router.post('/register', registerNewUser);

export { router as registerRoutes };
