import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const router = Router();

router.post('/login', UserController.login);
router.get('/', UserController.getAllUsers);

export default router;
