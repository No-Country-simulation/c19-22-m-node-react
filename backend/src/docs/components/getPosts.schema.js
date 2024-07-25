export const getPostsSchema = {
	type: 'object',
	properties: {
		id: {
			type: 'integer',
			example: 1,
		},
		pic: {
			type: 'string',
			example:
				'http://res.cloudinary.com/dzhxynhjy/image/upload/v1721697355/akrrarojweroiihembzv.jpg',
		},
	},
};
