export const register = {
	post: {
		tags: ['User'],
		description: 'Register user - done',
		requestBody: {
			required: true,
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/register',
					},
				},
			},
		},
		responses: {
			201: {
				description: 'User created',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								status: {
									type: 'integer',
									example: 0,
								},
								message: {
									type: 'string',
									example: 'User created',
								},
								data: {
									type: 'object',
									example: '{}',
								},
							},
						},
					},
				},
			},
			400: {
				description: 'Error',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								status: {
									type: 'integer',
									example: 1,
								},
								message: {
									type: 'string',
									example: 'Email already exists',
								},
								data: {
									type: 'object',
									example: '{}',
								},
							},
						},
					},
				},
			},
		},
	},
};
