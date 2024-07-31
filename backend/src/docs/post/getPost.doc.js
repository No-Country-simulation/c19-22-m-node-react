export const getPost = {
	get: {
		security: [{ bearerAuth: [] }],
		tags: ['Post'],
		description: 'get post - done',
		parameters: [
			{
				name: 'id',
				in: 'path',
				schema: {
					type: 'integer',
					example: 1,
				},
				description: 'post id',
			},
		],
		responses: {
			200: {
				description: 'Post obtained',
				content: {
					'application/json': {
						schema: {
							allOf: [
								{
									$ref: '#/components/schemas/response',
								},
								{
									properties: {
										data: {
											$ref: '#/components/schemas/getPost',
										},
									},
								},
							],
						},
						// {
						// 	type: 'object',
						// 	properties: {
						// 		status: {
						// 			type: 'integer',
						// 			example: 0,
						// 		},
						// 		message: {
						// 			type: 'string',
						// 			example: 'Post obtained',
						// 		},
						// 		data: {
						// 			$ref: '#/components/schemas/getPost',
						// 		},
						// 	},
						// },
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
