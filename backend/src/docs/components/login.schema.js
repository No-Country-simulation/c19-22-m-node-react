export const loginSchema = {
	type: 'object',
	properties: {
		username: {
			type: 'string',
			example: 'maria.123',
		},
		password: {
			type: 'string',
			example: 'password1234',
		},
	},
};
