import { Router } from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { PostController } from '../controllers/postController.js';

const router = Router();

router.post('/', verifyToken, PostController.createPost);
router.get('/home', verifyToken, PostController.getPosts);
router.get('/search', verifyToken, PostController.searchPosts);
router.get('/:id', verifyToken, PostController.getPost);
router.post('/comment/:postId', verifyToken, PostController.createComment);
router.delete('/comment/:commentId', verifyToken, PostController.deleteComment);
router.post('/like/:postId', verifyToken, PostController.createLike);
router.delete('/like/:postId', verifyToken, PostController.deleteLike);

export default router;
