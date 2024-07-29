export const profile = {
	get: {
		tags: ['User'],
		security: [{ bearerAuth: [] }],
		description: 'Get profile - done',
		responses: {
			200: {
				description: 'Get profile',
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
									example: 'Get profile',
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
			400: {
				description: 'Data incorrect',
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
									example: 'Data incorrect',
								},
								data: {
									type: 'object',
									example: {},
								},
							},
						},
					},
				},
			},
		},
	},
};
