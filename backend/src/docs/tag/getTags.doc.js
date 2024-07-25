export const getTags = {
	get: {
		// security: [{ bearerAuth: [] }],
		tags: ['Tag'],
		description: 'get post - done',
		parameters: [
			{
				name: 'searchQuery',
				in: 'query',
				schema: {
					type: 'string',
					example: 'tu',
				},
				description: 'tagId, value default null',
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
