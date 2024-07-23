export const getPost = {
	get: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'get post - in progress',
		parameters: [
			{
				name: 'size',
				in: 'query',
				schema: {
					type: 'integer',
					example: 10,
				},
				description: 'page size, value default: 10',
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
		],
		responses: {
			200: {
				description: 'Post obtained',
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
										$ref: '#/components/schemas/getPost',
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
