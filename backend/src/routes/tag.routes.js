import { Router } from 'express';
import { TagController } from '../controllers/tagController.js';

const router = Router();

router.get('/', TagController.getTags);

export default router;
