import { PostService } from '../services/postService.js';

const createPost = async (req, res, next) => {
	const userId = Number(req.userId);
	const data = req.body;
	const { img } = req.files;
	console.log(req.files.img);
	try {
		const response = await PostService.create(userId, data, img);
		res.status(201).json(response);
	} catch (error) {
		console.log(error);
		error.statusCode = 500;
		next(error);
	}
};

const getPosts = async (req, res, next) => {
	const userId = Number(req.userId);
	let { page = 1, size = null, tagId = null } = req.query;
	try {
		const response = await PostService.getAll(userId, page, size, tagId);
		res.status(201).json(response);
	} catch (error) {
		console.log(error);
		error.statusCode = 500;
		next(error);
	}
};

const getPost = async (req, res, next) => {
	const { id } = req.params;
	try {
		const response = await PostService.getById(id);
		res.status(200).json(response);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

export const PostController = {
	createPost,
	getPosts,
	getPost,
};
