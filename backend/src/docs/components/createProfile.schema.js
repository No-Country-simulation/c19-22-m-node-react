export const createProfileSchema = {
	type: 'object',
	properties: {
		username: {
			type: 'string',
			example: 'lara.molina',
		},
		name: {
			type: 'string',
			example: 'Lara',
		},
		lastname: {
			type: 'string',
			example: 'molina',
		},
		occupation: {
			type: 'string',
			example: 'Artista plástica',
		},
		location: {
			type: 'string',
			example: 'Buenos Aires',
		},
		education: {
			type: 'string',
			example: 'Artista plástica y Diseñadora gráfica',
		},
		editImage: {
			type: 'boolean',
			example: 'true',
		},
		about: {
			type: 'string',
			example:
				'Pintura en acuarela, acrílico y otros. Escultura con materiales reciclados.',
		},
		profilePic: {
			type: 'string',
			format: 'binary',
		},
	},
};
