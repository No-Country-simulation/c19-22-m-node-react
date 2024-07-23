import { PostService } from '../services/postService.js';

const createPost = async (req, res, next) => {
	const userId = Number(req.userId);
	const data = req.body;
	const { img } = req.files;
	try {
		const response = await PostService.create(userId, data, img);
		res.status(201).json(response);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

const getPosts = async (req, res, next) => {
	const userId = Number(req.userId);
	const { page = 1, size = 10 } = req.query;
	try {
		const response = await PostService.getAll(userId, page, size);
		res.status(201).json(response);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

export const PostController = {
	createPost,
	getPosts,
};
