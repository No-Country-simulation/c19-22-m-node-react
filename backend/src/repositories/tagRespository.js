import AppDataSource from '../config/db.js';
import { Tag } from '../models/tag.model.js';

export const tagRepository = AppDataSource.getRepository(Tag);
