export const getAllTags = {
	get: {
		// security: [{ bearerAuth: [] }],
		tags: ['Tag'],
		description: 'get all tags - done',
		responses: {
			200: {
				description: 'Tags obtained',
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
										type: 'object',
										properties: {
											id: {
												type: 'integer',
												example: 1,
											},
											name: {
												type: 'string',
												example: 'acuarela',
											},
										},
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
