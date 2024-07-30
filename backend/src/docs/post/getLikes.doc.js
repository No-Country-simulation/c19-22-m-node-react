export const getLikes = {
	get: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'Get Likes - done',
		responses: {
			201: {
				description: 'Like obtained',
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
									example: 'Like obtained',
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
