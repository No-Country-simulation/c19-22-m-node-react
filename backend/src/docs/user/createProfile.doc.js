export const createProfile = {
	post: {
		tags: ['User'],
		security: [{ bearerAuth: [] }],
		description: 'Create profile - in progress',
		requestBody: {
			content: {
				'multipart/form-data': {
					schema: {
						$ref: '#/components/schemas/createProfile',
					},
					encoding: {
						profilePic: {
							contentType: 'image/png, image/jpeg',
						},
					},
				},
			},
		},
		responses: {
			200: {
				description: 'Create profile',
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
									example: 'Profile Created',
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
