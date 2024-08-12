import { Router } from 'express';
import { TagController } from '../controllers/tagController.js';

const router = Router();

router.get('/', TagController.getTags);
router.get('/getAll', TagController.getAllTags);

export default router;
