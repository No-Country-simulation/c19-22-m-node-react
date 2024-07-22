import { EntitySchema } from 'typeorm';

export const Post = new EntitySchema({
	name: 'Post',
	tableName: 'posts',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		content: {
			type: 'varchar',
		},
		creationDate: {
			type: 'date',
		},
		backgroundColor: {
			type: 'varchar',
		},
		textColor: {
			type: 'varchar',
		},
		fontSize: {
			type: 'int',
		},
		fontFamily: {
			type: 'varchar',
		},
		imageUrl: {
			type: 'varchar',
		},
		imageId: {
			type: 'varchar',
		},
	},
	relations: {
		user: {
			target: 'User',
			type: 'many-to-one',
			joinColumn: {
				name: 'user_id',
			},
			inverseSide: 'posts',
		},
	},
});
