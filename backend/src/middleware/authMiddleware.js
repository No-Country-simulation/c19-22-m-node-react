import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
	let token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({
			message: 'No token provided',
		});
	}

	token = token.split(' ')[1];

	try {
		const { id } = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = id;

		next();
	} catch (error) {
		console.log(error);
		return res.status(401).json({
			message: 'Invalid token',
		});
	}
};
