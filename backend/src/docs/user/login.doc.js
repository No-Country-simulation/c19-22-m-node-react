export const login = {
	post: {
		tags: ['User'],
		description: 'Login user - done',
		requestBody: {
			required: true,
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/login',
					},
				},
			},
		},
		responses: {
			200: {
				description: 'User Login',
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
									example: 'User login',
								},
								data: {
									type: 'object',
									properties: {
										token: {
											type: 'string',
											example: 'token',
										},
									},
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
