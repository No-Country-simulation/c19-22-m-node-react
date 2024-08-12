export const deleteComment = {
	delete: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'Delete comment - done',
		parameters: [
			{
				name: 'commentId',
				in: 'path',
				schema: {
					type: 'integer',
					example: 1,
				},
				description: 'comment id',
			},
		],
		responses: {
			201: {
				description: 'Comment deleted',
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
									example: 'Comment created',
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
