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
			nullable: true,
		},
		creationDate: {
			type: 'date',
		},
		backgroundColor: {
			type: 'varchar',
			nullable: true,
		},
		textColor: {
			type: 'varchar',
			nullable: true,
		},
		fontSize: {
			type: 'int',
			nullable: true,
		},
		fontFamily: {
			type: 'varchar',
			nullable: true,
		},
		imageUrl: {
			type: 'varchar',
			nullable: true,
		},
		imageId: {
			type: 'varchar',
			nullable: true,
		},
		likes: {
			type: 'int',
			default: 0,
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
		tags: {
			target: 'Tag',
			type: 'many-to-many',
			joinTable: {
				name: 'posts_tags_tags',
				joinColumn: { name: 'postsId', referencedColumnName: 'id' },
				inverseJoinColumn: { name: 'tagsId', referencedColumnName: 'id' },
			},
			inverseSide: 'posts',
		},
	},
});
