export const getPosts = {
	get: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'get post - done',
		responses: {
			200: {
				description: 'Posts obtained',
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
									type: 'array',
									items: {
										$ref: '#/components/schemas/getPosts',
									},
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
