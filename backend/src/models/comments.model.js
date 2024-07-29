import { EntitySchema } from 'typeorm';

export const Comment = new EntitySchema({
	name: 'Comment',
	tableName: 'comments',
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
			type: 'timestamp',
			default: () => 'CURRENT_TIMESTAMP',
		},
	},
	relations: {
		post: {
			target: 'Post',
			type: 'many-to-one',
			joinColumn: {
				name: 'post_id',
			},
			inverseSide: 'comments',
		},
		user: {
			target: 'User',
			type: 'many-to-one',
			joinColumn: {
				name: 'user_id',
			},
			inverseSide: 'comments',
		},
	},
});
