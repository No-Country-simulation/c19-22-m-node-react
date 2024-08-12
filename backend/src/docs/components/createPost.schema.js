export const createPostSchema = {
	type: 'object',
	properties: {
		content: {
			type: 'string',
			example: 'The purpose',
		},
		description: {
			type: 'string',
			example: 'Post sobre dibujo en lienzo',
		},
		backgroundColor: {
			type: 'string',
			example: '#232323',
		},
		textColor: {
			type: 'string',
			example: '#0A0A0A',
		},
		fontSize: {
			type: 'string',
			example: 'small',
		},
		fontFamily: {
			type: 'string',
			example: 'sans',
		},
		fontAlign: {
			type: 'string',
			example: 'center',
		},
		tags: {
			type: 'string',
			example: '1, 2, 3',
		},
		img: {
			type: 'string',
			format: 'binary',
		},
	},
};
