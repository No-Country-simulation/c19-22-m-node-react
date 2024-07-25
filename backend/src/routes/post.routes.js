import { Router } from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { PostController } from '../controllers/postController.js';

const router = Router();

router.post('/', verifyToken, PostController.createPost);
router.get('/', verifyToken, PostController.getPosts);
router.get('/:id', verifyToken, PostController.getPost);

export default router;
