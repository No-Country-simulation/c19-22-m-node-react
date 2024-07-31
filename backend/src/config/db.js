import { DataSource } from 'typeorm';
import { User } from '../models/user.model.js';
import 'dotenv/config';
import { FriendRequest } from '../models/friendRequest.model.js';
import { Post } from '../models/post.model.js';
import { Tag } from '../models/tag.model.js';
import { Notification } from '../models/notifications.model.js';

const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [User, FriendRequest, Post, Tag, Notification],
	migrations: [],
	subscribers: [],
});

// export { AppDataSource };

export default AppDataSource;
