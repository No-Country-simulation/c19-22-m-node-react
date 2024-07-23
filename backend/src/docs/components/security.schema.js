export const securitySchema = {
	bearerAuth: {
		type: 'http',
		scheme: 'bearer',
		bearerFormat: 'JWT',
	},
};
