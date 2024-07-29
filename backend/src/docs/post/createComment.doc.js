export const createComment = {
	post: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'Create comment - done',
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
		requestBody: {
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							content: {
								type: 'string',
								example: 'algun comentario',
							},
						},
					},
				},
			},
		},
		responses: {
			201: {
				description: 'Comment created',
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
