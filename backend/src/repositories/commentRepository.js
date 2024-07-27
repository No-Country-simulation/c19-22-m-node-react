import AppDataSource from '../config/db.js';
import { Comment } from '../models/comments.model.js';

export const commentRepository = AppDataSource.getRepository(Comment);
