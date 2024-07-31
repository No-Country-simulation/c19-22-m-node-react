import { TagService } from '../services/tagService.js';

const getTags = async (req, res, next) => {
	const { searchQuery = '' } = req.query;
	try {
		const response = await TagService.getAll(searchQuery);
		res.status(201).json(response);
	} catch (error) {
		console.log(error);
		error.statusCode = 500;
		next(error);
	}
};

export const TagController = {
	getTags,
};
