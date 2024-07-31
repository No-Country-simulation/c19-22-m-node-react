import AppDataSource from '../config/db.js';
import { Post } from '../models/post.model.js';

export const postRepository = AppDataSource.getRepository(Post);
