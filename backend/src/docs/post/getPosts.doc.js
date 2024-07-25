export const getPosts = {
	get: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'get post - done',
		parameters: [
			{
				name: 'size',
				in: 'query',
				schema: {
					type: 'integer',
					example: 10,
				},
				description: 'page size, value default: infinity',
			},
			{
				name: 'page',
				in: 'query',
				schema: {
					type: 'integer',
					example: 1,
				},
				description: 'page number, value default: 1',
			},
			{
				name: 'tagId',
				in: 'query',
				schema: {
					type: 'int',
					example: 1,
				},
				description: 'tagId, value default null',
			},
		],
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
