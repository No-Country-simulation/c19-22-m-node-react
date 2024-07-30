import { PostService } from '../services/postService.js';

const createPost = async (req, res, next) => {
	const userId = Number(req.userId);
	const data = req.body;
	const img = req.files?.img;
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
	try {
		const response = await PostService.getAll(userId);
		res.status(201).json(response);
	} catch (error) {
		console.log(error);
		error.statusCode = 500;
		next(error);
	}
};

const searchPosts = async (req, res, next) => {
	const userId = Number(req.userId);
	const { tagId = null } = req.query;
	try {
		const response = await PostService.search(userId, tagId);
		res.status(201).json(response);
	} catch (error) {
		console.log(error);
		error.statusCode = 500;
		next(error);
	}
};

const getPost = async (req, res, next) => {
	const { id } = req.params;
	const userId = Number(id);
	try {
		const response = await PostService.getById(userId);
		res.status(200).json(response);
	} catch (error) {
		console.log(error);
		error.statusCode = 500;
		next(error);
	}
};

const createComment = async (req, res, next) => {
	const { postId } = req.params;
	const userId = Number(req.userId);
	const { content } = req.body;
	try {
		const response = await PostService.createComment(postId, userId, content);
		res.status(200).json(response);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

const deleteComment = async (req, res, next) => {
	const { commentId } = req.params;
	try {
		const response = await PostService.deleteComment(commentId);
		res.status(200).json(response);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

const createLike = async (req, res, next) => {
	const { postId } = req.params;
	const userId = Number(req.userId);
	try {
		const response = await PostService.createLike(postId, userId);
		res.status(200).json(response);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

const deleteLike = async (req, res, next) => {
	const { postId } = req.params;
	const userId = Number(req.userId);
	try {
		const response = await PostService.deleteLike(postId, userId);
		res.status(200).json(response);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

export const PostController = {
	createPost,
	getPosts,
	searchPosts,
	getPost,
	createComment,
	deleteComment,
	createLike,
	deleteLike,
};
