import ResponseDTO from '../shared/dtos/ResponseDTO.js';

export const handleError = (error, _req, res, _next) => {
	const response = ResponseDTO.error('Error server');
	res.status(error.statusCode || 500).json(response);
};
