export const getPostSchema = {
	type: 'object',
	properties: {
		id: {
			type: 'integer',
			example: 1,
		},
		content: {
			type: 'string',
			example: 'Primer post - contenido',
		},
		creationDate: {
			type: 'date',
			example: '2023-10-29',
		},
		backgroundColor: {
			type: 'string',
			example: '#333333',
		},
		textColor: {
			type: 'string',
			example: '#333333',
		},
		fontSize: {
			type: 'integer',
			example: 14,
		},
		fontFamily: {
			type: 'string',
			example: 'sans',
		},
		imageUrl: {
			type: 'string',
			example:
				'http://res.cloudinary.com/dzhxynhjy/image/upload/v1721697355/akrrarojweroiihembzv.jpg',
		},
	},
};
