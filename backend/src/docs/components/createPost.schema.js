export const createPostSchema = {
	type: 'object',
	properties: {
		content: {
			type: 'string',
			example: 'Villa con Vista al Océano',
		},
		backgroundColor: {
			type: 'string',
			example: 'Argentina',
		},
		textColor: {
			type: 'string',
			example: 'Buenos Aires',
		},
		fontSize: {
			type: 'integer',
			example: 1,
		},
		fontFamily: {
			type: 'string',
			example: 'Avenida las Flores N°550',
		},
		img: {
			type: 'string',
			format: 'binary',
		},
	},
	required: [
		'content',
		'backgroundColor',
		'textColor',
		'fontSize',
		'fontFamily',
		'img',
	],
};
