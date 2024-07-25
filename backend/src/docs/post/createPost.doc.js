export const createPost = {
	post: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'Create post - done',
		requestBody: {
			content: {
				'multipart/form-data': {
					schema: {
						$ref: '#/components/schemas/createPost',
					},
					encoding: {
						img: {
							contentType: 'image/png, image/jpeg',
						},
					},
				},
			},
		},
		responses: {
			201: {
				description: 'Post created',
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
									example: 'Post created',
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
