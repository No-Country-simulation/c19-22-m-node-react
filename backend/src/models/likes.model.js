import { EntitySchema } from 'typeorm';

export const Like = new EntitySchema({
	name: 'Like',
	tableName: 'likes',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		creationDate: {
			type: 'timestamp',
			default: () => 'CURRENT_TIMESTAMP',
		},
		postId: {
			type: 'int',
			name: 'post_id',
		},
		userId: {
			type: 'int',
			name: 'user_id',
		},
	},
	relations: {
		post: {
			target: 'Post',
			type: 'many-to-one',
			joinColumn: {
				name: 'post_id',
			},
			inverseSide: 'likes',
		},
		user: {
			target: 'User',
			type: 'many-to-one',
			joinColumn: {
				name: 'user_id',
			},
			inverseSide: 'likes',
		},
	},
});
