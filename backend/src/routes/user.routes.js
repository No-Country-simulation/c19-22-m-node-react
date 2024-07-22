import { Router } from 'express';
import { UserController } from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', verifyToken, UserController.profile);

router.post('/friend-request', verifyToken, UserController.sendFriendRequest);
router.post(
	'/accept-friend-request',
	verifyToken,
	UserController.acceptFriendRequest,
);
router.post(
	'/reject-friend-request',
	verifyToken,
	UserController.rejectFriendRequest,
);

export default router;
