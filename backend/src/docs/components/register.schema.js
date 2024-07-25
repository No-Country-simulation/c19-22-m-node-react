export const registerSchema = {
	type: 'object',
	properties: {
		username: {
			type: 'string',
			example: 'maria.123',
		},
		name: {
			type: 'string',
			example: 'maria',
		},
		lastname: {
			type: 'string',
			example: 'perez',
		},
		mail: {
			type: 'string',
			example: 'mariaperez@example.com',
		},
		password: {
			type: 'string',
			example: 'password1234',
		},
	},
};
