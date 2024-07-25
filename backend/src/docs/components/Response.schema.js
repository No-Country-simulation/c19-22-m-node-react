export const responseSchema = {
	type: 'object',
	properties: {
		message: {
			type: 'string',
			example: 'Success',
		},
		status: {
			type: 'string',
			example: 'ok',
		},
		data: {
			type: 'object',
			nullable: true,
		},
	},
};
