import { EntitySchema } from 'typeorm';

export const Tag = new EntitySchema({
	name: 'Tag',
	tableName: 'tags',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		title: {
			type: 'varchar',
		},
	},
	relations: {
		posts: {
			target: 'Post',
			type: 'many-to-many',
			inverseSide: 'tags',
		},
	},
});
