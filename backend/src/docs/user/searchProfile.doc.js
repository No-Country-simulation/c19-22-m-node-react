export const searchProfile = {
	get: {
		tags: ['User'],
		description: 'get profile by id - done',
		parameters: [
			{
				name: 'id',
				in: 'path',
				schema: {
					type: 'integer',
					example: 1,
				},
				description: 'user id',
			},
		],
		responses: {
			200: {
				description: 'Profile obtained',
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
									example: 'Post obtained',
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
									example: 'Error',
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
