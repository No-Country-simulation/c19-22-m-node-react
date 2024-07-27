export const createLike = {
	post: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'Create Like - done',
		parameters: [
			{
				name: 'postId',
				in: 'path',
				schema: {
					type: 'integer',
					example: 1,
				},
				description: 'post id',
			},
		],
		responses: {
			201: {
				description: 'Like created',
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
									example: 'Like created',
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
