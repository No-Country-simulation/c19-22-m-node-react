export const deleteLike = {
	delete: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'Delete Like - done',
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
				description: 'Like deleted',
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
									example: 'Like deleted',
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
