import AppDataSource from '../config/db.js';
import { Like } from '../models/likes.model.js';

export const likeRepository = AppDataSource.getRepository(Like);
